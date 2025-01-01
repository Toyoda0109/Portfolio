// src/routes/contactRoutes.js
const express = require('express');
const contactController = require('../controllers/contactController');
const { validateInput } = require('../middlewares/validation');

const router = express.Router();

// メール送信エンドポイント
router.post('/send-email', validateInput, contactController.sendEmail);

module.exports = router;
