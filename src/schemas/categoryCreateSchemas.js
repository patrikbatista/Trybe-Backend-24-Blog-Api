const nameValidate = (name) => {
  if (!name) {
    return false;
  }
  return true;
};

module.exports = {
  nameValidate,
};