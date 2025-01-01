// src/routes/downloadRoutes.js
const express = require('express');
const downloadController = require('../controllers/downloadController');

const router = express.Router();

// ダウンロード用エンドポイント
router.get('/download', downloadController.downloadFile);

// ダウンロード数確認エンドポイント
router.get('/stats', downloadController.getDownloadStats);

module.exports = router;
