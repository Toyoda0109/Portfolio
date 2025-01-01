// src/utils/fileUtils.js
const fs = require('fs');

/**
 * ダウンロード数を初期化または取得する関数
 * @param {string} filePath - ダウンロード数を記録するファイルのパス
 * @returns {number} 現在のダウンロード数
 */
function initializeDownloadCount(filePath) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    try {
      return JSON.parse(data).count || 0;
    } catch (error) {
      console.error('JSONのパース中にエラーが発生しました:', error);
      return 0;
    }
  } else {
    fs.writeFileSync(filePath, JSON.stringify({ count: 0 }), 'utf8');
    return 0;
  }
}

/**
 * ダウンロード数を更新する関数
 * @param {string} filePath - ダウンロード数を記録するファイルのパス
 * @param {number} count - 現在のダウンロード数
 */
function updateDownloadCount(filePath, count) {
  try {
    fs.writeFileSync(filePath, JSON.stringify({ count }), 'utf8');
  } catch (error) {
    console.error('ファイル書き込み中にエラーが発生しました:', error);
  }
}

module.exports = {
  initializeDownloadCount,
  updateDownloadCount,
};
