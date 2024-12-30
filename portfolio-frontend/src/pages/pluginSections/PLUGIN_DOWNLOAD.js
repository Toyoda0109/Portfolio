import React from 'react';

function PLUGIN_DOWNLOAD() {
  const DOWNLOAD_URL = process.env.REACT_APP_API_DOWNLOAD_URL;

  if (!DOWNLOAD_URL) {
    console.error('環境変数 REACT_APP_API_DOWNLOAD_URL が設定されていません');
  }

  return (
    <section id="PLUGIN_DOWNLOAD">
      <h4 className="main-heading">プラグインのダウンロード</h4>
      <p>以下のリンクから、プラグインをダウンロードできます(FREE)。</p>
      {DOWNLOAD_URL ? (
        <a href={DOWNLOAD_URL} className="btn waves-effect waves-light">
          <i className="material-icons left">cloud_download</i> プラグインをダウンロード
        </a>
      ) : (
        <p>ダウンロードリンクが利用できません。</p>
      )}
      <p>ダウンロード後、ファイルを解凍し、C:\Program Files\Common Files\VST3のフォルダに配置してください。</p>
      <img src="/img/File_Routing.png" alt="File Routing Guide" className="plugin-sub-image" />

      <p>
        この場所にプラグインを配置すると、多くのDAW（Cubase、FL Studio etc..）が自動的にそのプラグインを検出して使えるようになります。
      </p>
    </section>
  );
}

export default PLUGIN_DOWNLOAD;
