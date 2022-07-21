const verifyToken = require('../utils/verifyToken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const decoded = verifyToken(authorization);

  if (!decoded) return res.status(401).json({ message: 'Expired or invalid token' });

  req.user = decoded.user;
  return next();
};