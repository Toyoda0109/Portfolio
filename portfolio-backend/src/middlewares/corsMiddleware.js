// src/middlewares/corsMiddleware.js
const cors = require('cors');

module.exports = (origin) => {
  return cors({
    origin: origin,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], // 必要なヘッダーを許可
    credentials: true, // クッキーの送信を許可
  });
};
