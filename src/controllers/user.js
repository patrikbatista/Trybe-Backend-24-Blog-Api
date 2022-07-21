const userCreateShemas = require('../schemas/userCreateShemas');
const userServices = require('../services/userServices');
const createToken = require('../utils/createToken');

const ERROR_INVALID_NAME = {
  status: 400,
  message: '"displayName" length must be at least 8 characters long',
};

const ERROR_INVALID_EMAIL = {
  status: 400,
  message: '"email" must be a valid email',
};

const ERROR_INVALID_PASSWORD = {
  status: 400,
  message: '"password" length must be at least 6 characters long',
};

const ERROR_USER_EXIST = {
  status: 409,
  message: 'User already registered',
};

const createUser = async (req, res, _next) => {
  const { displayName, email, password, image } = req.body;

  const validateDisplayName = userCreateShemas.nameValidate(displayName);
  if (!validateDisplayName) throw ERROR_INVALID_NAME;

  const validateEmail = userCreateShemas.emailValidate(email);
  if (!validateEmail) throw ERROR_INVALID_EMAIL;
  
  const validatePassword = userCreateShemas.passwordValidate(password);
  if (!validatePassword) throw ERROR_INVALID_PASSWORD;
  
  const findUser = await userServices.findUser(email);
  if (findUser) throw ERROR_USER_EXIST;

  const result = await userServices.createUser({ email, displayName, password, image });
  const token = createToken(displayName, result.dataValues.id);

  return res.status(201).json({ token });
};

const getUsers = async (req, res) => {
  const users = await userServices.getAllUsers();
  res.status(200).json({ users });
};

module.exports = {
  createUser,
  getUsers,
};