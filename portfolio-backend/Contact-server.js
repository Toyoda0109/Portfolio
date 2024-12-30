const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet'); // helmet導入
const xss = require('xss'); // XSS対策
require('dotenv').config(); // 環境変数の読み込み

const app = express();

// ミドルウェア設定
app.use(cors({
  origin: process.env.FRONTEND_URL, // フロントエンドのURL
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'], // 必要なヘッダーを許可
  credentials: true, // クッキーの送信を許可
}));
app.use(helmet()); // HTTPヘッダーを保護
app.use(bodyParser.json()); // JSON データを解析
app.use(bodyParser.urlencoded({ extended: true })); // URL エンコードデータを解析

// メール送信エンドポイント
app.post('/api/send-email', async (req, res) => {
  console.log('POSTリクエストを受信しました:', req.body);

  // データをサニタイズ
  const { name, email, message } = req.body;
  const sanitizedName = xss(name);
  const sanitizedEmail = xss(email);
  const sanitizedMessage = xss(message);

  // 入力値の簡易チェック
  if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
    console.error('必須フィールドが不足しています');
    return res.status(400).send('必須フィールドが不足しています');
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log('メール送信を試みます');
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'お問い合わせ',
      text: `名前: ${sanitizedName}\nメール: ${sanitizedEmail}\nメッセージ:\n${sanitizedMessage}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('メール送信成功:', info.response);
    res.status(200).send('メールが送信されました');
  } catch (error) {
    console.error('メール送信エラー:', error.message);
    res.status(500).send('メールの送信に失敗しました');
  }
});

// テスト用のルート
app.get('/', (req, res) => {
  res.send('サーバーが稼働中です');
});

// サーバーの起動
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`サーバーがポート ${PORT} で起動しました`);
});
