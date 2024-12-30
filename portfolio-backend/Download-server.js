const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// ダウンロード数を記録するファイル
const downloadCountFile = path.join(__dirname, 'downloadCount.json');

// 初期化: ファイルが存在しない場合は作成
let downloadCount = 0;
if (fs.existsSync(downloadCountFile)) {
  const data = fs.readFileSync(downloadCountFile, 'utf8');
  downloadCount = JSON.parse(data).count || 0;
} else {
  fs.writeFileSync(downloadCountFile, JSON.stringify({ count: 0 }));
}

// ダウンロードのエンドポイント
app.get('/api/download', (req, res) => {
  const filePath = path.join(__dirname, 'files/CHORDIN.zip');

  // ダウンロード数を増加
  downloadCount++;
  fs.writeFileSync(downloadCountFile, JSON.stringify({ count: downloadCount }));

  // ファイルをダウンロードとして提供
  res.download(filePath, 'CHORDIN.zip', (err) => {
    if (err) {
      console.log('エラーが発生しました: ', err);
      res.status(500).send('ファイルのダウンロード中にエラーが発生しました。');
    }
  });
});

// ダウンロード数を確認するエンドポイント (任意)
app.get('/api/stats', (req, res) => {
  res.json({ downloadCount });
});

// サーバーを起動
app.listen(3002, () => {
  console.log(`サーバーがポート3002で起動しました`);
});
