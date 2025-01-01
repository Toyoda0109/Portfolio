// src/middlewares/authenticateAdmin.js
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/constants');

module.exports = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).json({ message: '認証トークンがありません。' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (decoded.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: '管理者権限が必要です。' });
    }
  } catch (err) {
    res.status(403).json({ message: '無効なトークンです。' });
  }
};
