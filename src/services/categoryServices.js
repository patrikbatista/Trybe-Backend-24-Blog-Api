const { Sequelize } = require('sequelize');
const { Category } = require('../database/models');

const { Op } = Sequelize;

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });
  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const findCategory = async (categoryIds) => {
  const result = await Category.findAll({
    where: {
      id: {
        [Op.or]: [categoryIds],
      },
    },
  });
  if (result.length !== categoryIds.length) return false;
  return true;
};

module.exports = {
  createCategory,
  getAllCategories,
  findCategory,
};