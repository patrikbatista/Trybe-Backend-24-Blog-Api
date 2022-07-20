const validator = require('validator');

const nameValidate = (displayName) => {
  if (!displayName || !validator.isAlpha(displayName) || displayName.length < 8) {
    return false;
  }
  return true;
};

const emailValidate = (email) => {
  if (!email || !validator.isEmail(email)) {
    return false;
  }
  return true;
};

const passwordValidate = (password) => {
  if (!password || password.length < 6) {
    return false;
  }
  return true;
};

module.exports = {
  nameValidate,
  emailValidate,
  passwordValidate,
};