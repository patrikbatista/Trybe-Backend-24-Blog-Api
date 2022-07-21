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
  const result = await categoryServices.createCategory(name);
  console.log(result);
  return res.status(201).json({ id: result.dataValues.id, name: result.dataValues.name });
};

module.exports = {
  createCategory,
};