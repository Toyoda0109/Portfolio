// src/config/constants.js
require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = {
  FRONTEND_URL: process.env.FRONTEND_URL,
  SECRET_KEY: process.env.SECRET_KEY,
  allowedIPs: process.env.ALLOWED_IPS ? process.env.ALLOWED_IPS.split(',') : [],
  adminUser: {
    username: process.env.ADMIN_USERNAME, 
    password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
  },
  AUTH_PORT: process.env.AUTH_PORT,
  CONTACT_PORT: process.env.CONTACT_PORT,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,

  DOWNLOAD_PORT: process.env.DOWNLOAD_PORT,
  DOWNLOAD_COUNT_FILE: path.join(__dirname, '../../downloadCount.json'), // カウントファイルのパス
  DOWNLOAD_FILE_PATH: path.join(__dirname, '../../files/CHORDIN.zip'),  // ダウンロード対象ファイル
};

};
