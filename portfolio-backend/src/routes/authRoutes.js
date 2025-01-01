// src/routes/authRoutes.js
const express = require('express');
const authController = require('../controllers/authController');
const authenticateAdmin = require('../middlewares/authenticateAdmin');
const ipRestrict = require('../middlewares/ipRestrict');

const router = express.Router();

// ログインエンドポイント
router.post('/login', authController.login);

// 管理者専用の投稿エンドポイント
router.post('/submit', authenticateAdmin, authController.submitComment);

// IPチェックエンドポイント
router.get('/check-ip', ipRestrict, authController.checkIP);

module.exports = router;
