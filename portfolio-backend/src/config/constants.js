// src/config/constants.js
require('dotenv').config();
const bcrypt = require('bcrypt');
const path = require('path');

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  throw new Error('EMAIL_USER または EMAIL_PASS が設定されていません。');
}

if (!process.env.FRONTEND_URL) {
  throw new Error('FRONTEND_URL が設定されていません。');
}

if (!process.env.ADMIN_USERNAME) {
  throw new Error('ADMIN_USERNAME が設定されていません。');
}

if (!process.env.ADMIN_PASSWORD) {
  throw new Error('ADMIN_PASSWORD が設定されていません。');
}

if (!process.env.AUTH_PORT) {
  throw new Error('AUTH_PORT が設定されていません。');
}

if (!process.env.CONTACT_PORT) {
  throw new Error('CONTACT_PORT が設定されていません。');
}

if (!process.env.DOWNLOAD_PORT) {
  throw new Error('DOWNLOAD_PORT が設定されていません。');
}

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
