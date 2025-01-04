const express = require('express');
const corsMiddleware = require('./middlewares/corsMiddleware');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
const downloadRoutes = require('./routes/downloadRoutes');
const { FRONTEND_URL, AUTH_PORT, CONTACT_PORT, DOWNLOAD_PORT } = require('./config/constants');

// 認証サーバーの設定
const authApp = express();
authApp.use(corsMiddleware(FRONTEND_URL));
authApp.use(helmet());
authApp.use(bodyParser.json());
authApp.use(bodyParser.urlencoded({ extended: true }));
authApp.use('/api', authRoutes);

// お問い合わせサーバーの設定
const contactApp = express();
contactApp.use(corsMiddleware(FRONTEND_URL));
contactApp.use(helmet());
contactApp.use(bodyParser.json());
contactApp.use(bodyParser.urlencoded({ extended: true }));
contactApp.use('/api', contactRoutes);

// ダウンロードサーバーの設定
const downloadApp = express();
downloadApp.use(corsMiddleware(FRONTEND_URL));
downloadApp.use(helmet());
downloadApp.use(bodyParser.json());
downloadApp.use(bodyParser.urlencoded({ extended: true }));
downloadApp.use('/api', downloadRoutes);

// 認証サーバーの起動
authApp.listen(AUTH_PORT, () => {
  console.log(`認証サーバーがポート ${AUTH_PORT} で起動しました`);
});

// お問い合わせサーバーの起動
contactApp.listen(CONTACT_PORT, () => {
  console.log(`お問い合わせサーバーがポート ${CONTACT_PORT} で起動しました`);
});

// ダウンロードサーバーの起動
downloadApp.listen(DOWNLOAD_PORT, () => {
  console.log(`ダウンロードサーバーがポート ${DOWNLOAD_PORT} で起動しました`);
});
