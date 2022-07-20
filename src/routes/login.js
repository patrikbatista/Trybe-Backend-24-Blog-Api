const { Router } = require('express');
const loginController = require('../controllers/login');

const login = Router();
login.post('/', loginController);

module.exports = login;