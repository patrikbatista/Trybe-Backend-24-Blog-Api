const categoryServices = require('../services/categoryServices');
const blogPostServices = require('../services/blogPostServices');
const postCategoriesServices = require('../services/postCategoriesServices');
const postCreateSchemas = require('../schemas/postCreateSchemas');

const ERROR_INVALID_CATEGORIES = {
  status: 400,
  message: '"categoryIds" not found',
};

const ERROR_INVALID_BODY = {
  status: 400,
  message: 'Some required fields are missing',
};

const createBlogPost = async (req, res, _next) => {
  const { title, categoryIds, content } = req.body;
  const { id } = req.user;

  const bodyValidate = postCreateSchemas.postValidate({ title, categoryIds, content });
  if (!bodyValidate) throw ERROR_INVALID_BODY;

  const categoriesExists = await categoryServices.findCategory(categoryIds);
  if (categoriesExists.length !== categoryIds.length) throw ERROR_INVALID_CATEGORIES;

  const blogPost = await blogPostServices.createBlogPost({ userId: id, title, content });
  const { id: postId } = blogPost.dataValues;
  await postCategoriesServices.createPostCategorie({ categoryIds, postId });

  return res.status(201).json({ 
    id: blogPost.dataValues.id, 
    title, 
    content,
    userId: blogPost.dataValues.userId, 
    updated: blogPost.dataValues.updated,
    published: blogPost.dataValues.published,
  });
};

module.exports = {
  createBlogPost,
};