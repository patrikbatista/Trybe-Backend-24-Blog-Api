const { BlogPost } = require('../database/models');

const createBlogPost = async ({ userId, title, content }) => {
  const blogPost = await BlogPost.create({ userId, title, content });
  return blogPost;
};

module.exports = {
  createBlogPost,
};
