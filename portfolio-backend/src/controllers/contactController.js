// src/controllers/contactController.js
const mailer = require('../utils/mailer');
const xss = require('xss');

exports.sendEmail = async (req, res) => {
  console.log('POSTリクエストを受信しました:', req.body);

  // データをサニタイズ
  const { name, email, message } = req.body;
  const sanitizedName = xss(name);
  const sanitizedEmail = xss(email);
  const sanitizedMessage = xss(message);

  try {
    const info = await mailer.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'お問い合わせ',
      text: `名前: ${sanitizedName}\nメール: ${sanitizedEmail}\nメッセージ:\n${sanitizedMessage}`,
    });

    console.log('メール送信成功:', info.response);
    res.status(200).send('メールが送信されました');
  } catch (error) {
    console.error('メール送信エラー:', error.message);
    res.status(500).send('メールの送信に失敗しました');
  }
};
