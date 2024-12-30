const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();

// 環境変数の読み込み
require('dotenv').config();

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
const SECRET_KEY = process.env.SECRET_KEY || 'Toyoda0109';

// 許可するIPアドレスリスト
const allowedIPs = ['122.213.185.13']; 

// 管理者ユーザー情報
const adminUser = {
  username: 'muzimuzi',
  password: bcrypt.hashSync('Toyoda0109', 10), // 起動時にハッシュ化
};

// CORS設定
app.use(cors({
  origin: FRONTEND_URL,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// JSONパーサー
app.use(express.json());

// IPアドレス制限ミドルウェア
app.use((req, res, next) => {
  const clientIP = req.headers['x-forwarded-for']?.split(',')[0] || req.connection.remoteAddress;

  next();
});

// ログインAPI
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // ユーザー名とパスワードをチェック
  if (username === adminUser.username) {
    const isPasswordMatch = bcrypt.compareSync(password, adminUser.password);

    if (isPasswordMatch) {
      const token = jwt.sign({ username, role: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
      return res.json({ token });
    }
  }

  res.status(401).json({ message: 'ログイン失敗: ユーザー名またはパスワードが間違っています。' });
});

// トークン検証ミドルウェア
const authenticateAdmin = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).json({ message: '認証トークンがありません。' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    if (decoded.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: '管理者権限が必要です。' });
    }
  } catch (err) {
    res.status(403).json({ message: '無効なトークンです。' });
  }
};

// 投稿用エンドポイント（管理者のみ）
app.post('/api/submit', authenticateAdmin, (req, res) => {
  const { comment } = req.body;

  if (!comment) {
    return res.status(400).json({ message: 'コメントが空です。' });
  }


  // データベース保存処理（仮置き）
  res.json({ success: true, message: 'コメントが保存されました。' });
});

// IPアドレス確認用エンドポイント
app.get('/api/check-ip', (req, res) => {
  const clientIP = req.headers['x-forwarded-for']?.split(',')[0] || req.connection.remoteAddress;


  if (!allowedIPs.includes(clientIP)) {
    return res.status(403).json({ message: 'アクセス拒否: IPアドレスが許可されていません。' });
  }

  res.json({ access: true });
});

// サーバー起動
app.listen(3003, () => {
  console.log(`認証サーバーがポート3003で稼働中`);
});
