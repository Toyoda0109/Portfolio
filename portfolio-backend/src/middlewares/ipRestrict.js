// src/middlewares/ipRestrict.js
const { allowedIPs } = require('../config/constants');

module.exports = (req, res, next) => {
  const clientIP = req.headers['x-forwarded-for']?.split(',')[0] || req.connection.remoteAddress;

  if (!allowedIPs.includes(clientIP)) {
    return res.status(403).json({ message: 'アクセス拒否: IPアドレスが許可されていません。' });
  }

  next();
};
