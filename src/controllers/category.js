const categoryCreateSchemas = require('../schemas/categoryCreateSchemas');
const categoryServices = require('../services/categoryServices');

const ERROR_INVALID_NAME = {
  status: 400,
  message: '"name" is required',
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const validateName = categoryCreateSchemas.nameValidate(name);
  if (!validateName) throw ERROR_INVALID_NAME;
  await categoryServices.createCategory(name);
  return res.status(201).json(name);
};

module.exports = {
  createCategory,
};