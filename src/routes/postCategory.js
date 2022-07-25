const { Router } = require('express');
const tokenValidate = require('../controllers/tokenValidate');
const postCategoryController = require('../controllers/blogPost');

const postCategory = Router();

postCategory.post('/', tokenValidate, postCategoryController.createBlogPost);

module.exports = postCategory;