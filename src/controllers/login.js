const userServices = require('../services/userServices');
const createToken = require('../utils/createToken');

const ERROR_UNDEFINED = {
  status: 400,
  message: 'Some required fields are missing',
};

const ERROR_INVALID_FIELDS = {
  status: 400,
  message: 'Invalid fields',
};

module.exports = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email && !password) throw ERROR_UNDEFINED;

  const userExists = await userServices.loginUser(email, password);
  if (!userExists) throw ERROR_INVALID_FIELDS;

  const token = createToken(userExists.displayName, userExists.id);
  return res.status(200).json({ token });
};