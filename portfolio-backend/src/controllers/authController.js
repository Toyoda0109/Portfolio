// src/controllers/authController.js
const jwt = require('jsonwebtoken');
const { adminUser, SECRET_KEY } = require('../config/constants');

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === adminUser.username) {
    const isPasswordMatch = bcrypt.compareSync(password, adminUser.password);

    if (isPasswordMatch) {
      const token = jwt.sign({ username, role: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
      return res.json({ token });
    }
  }

  res.status(401).json({ message: 'ログイン失敗: ユーザー名またはパスワードが間違っています。' });
};

exports.submitComment = (req, res) => {
  const { comment } = req.body;

  if (!comment) {
    return res.status(400).json({ message: 'コメントが空です。' });
  }

  console.log(`管理者コメント: ${comment}`);
  res.json({ success: true, message: 'コメントが保存されました。' });
};

exports.checkIP = (req, res) => {
  const clientIP = req.headers['x-forwarded-for']?.split(',')[0] || req.connection.remoteAddress;

  if (!allowedIPs.includes(clientIP)) {
    return res.status(403).json({ message: 'アクセス拒否: IPアドレスが許可されていません。' });
  }

  res.json({ access: true });
};
