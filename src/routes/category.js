const { Router } = require('express');

const categoryController = require('../controllers/category');
const tokenValidate = require('../controllers/tokenValidate');

const category = Router();

category.post('/', tokenValidate, categoryController.createCategory);
category.get('/', tokenValidate, categoryController.getCategories);
// category.get('/:id', tokenValidate, userController.getUserId);

module.exports = category;