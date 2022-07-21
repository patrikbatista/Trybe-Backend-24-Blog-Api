const { Router } = require('express');

const userController = require('../controllers/user');
const tokenValidate = require('../controllers/tokenValidate');

const user = Router();

user.post('/', userController.createUser);
user.get('/', tokenValidate, userController.getUsers);

module.exports = user;