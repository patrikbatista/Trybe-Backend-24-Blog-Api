const { User } = require('../database/models');

const loginUser = async (email, password) => {
  const userExists = await User.findOne({ where: { email } });
  if (!userExists) return false;
  if (userExists.password !== password) return false;
  return userExists;
};

const findUser = async (email) => {
  const userExists = await User.findOne({ where: { email } });
  if (!userExists) return false;
  return true;
};

const createUser = async ({ email, displayName, password, image }) => {
  const newUser = await User.create({ email, displayName, password, image });
  return newUser;
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getUserId = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return user;
};

module.exports = {
  loginUser,
  findUser,
  createUser,
  getAllUsers,
  getUserId,
};