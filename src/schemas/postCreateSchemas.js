const postValidate = ({ title, content, categoryIds }) => {
  if (!title || !content || categoryIds.length === 0) {
    return false;
  }
  return true;
};

module.exports = {
  postValidate,
};