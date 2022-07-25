const { PostCategory } = require('../database/models');

const createPostCategorie = async ({ categoryIds, postId }) => {
  const postCategory = Promise.all(
    categoryIds.map(async (categoryId) => {
      const result = await PostCategory.create({ categoryId, postId });
      return result;
    }),
  );
  return postCategory;
};

module.exports = {
  createPostCategorie,
};