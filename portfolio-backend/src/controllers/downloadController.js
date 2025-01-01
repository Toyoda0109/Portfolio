// src/controllers/downloadController.js
const { DOWNLOAD_FILE_PATH, DOWNLOAD_COUNT_FILE } = require('../config/constants');
const { initializeDownloadCount, updateDownloadCount } = require('../utils/fileUtils');

let downloadCount = initializeDownloadCount(DOWNLOAD_COUNT_FILE);

// ダウンロードエンドポイントのロジック
exports.downloadFile = (req, res) => {
  // ダウンロード数を増加
  downloadCount++;
  updateDownloadCount(DOWNLOAD_COUNT_FILE, downloadCount);

  // ファイルをダウンロードとして提供
  res.download(DOWNLOAD_FILE_PATH, 'CHORDIN.zip', (err) => {
    if (err) {
      console.error('エラーが発生しました: ', err);
      res.status(500).send('ファイルのダウンロード中にエラーが発生しました。');
    }
  });
};

// ダウンロード数確認エンドポイントのロジック
exports.getDownloadStats = (req, res) => {
  res.json({ downloadCount });
};
