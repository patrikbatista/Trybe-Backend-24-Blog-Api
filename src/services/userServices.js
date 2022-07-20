const { User } = require('../database/models');

const loginUser = async (email, password) => {
  const userExists = await User.findOne({ where: email });
  if (!userExists) return false;
  if (userExists.password !== password) return false;
  return userExists;
};

module.exports = {
  loginUser,
};