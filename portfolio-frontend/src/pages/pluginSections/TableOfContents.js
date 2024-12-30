import React from 'react';
import useScrollToSection from '../../hooks/useScrollToSection';
import './TableOfContents.css';

function TableOfContents() {
  const scrollToSection = useScrollToSection(); // カスタムフックからスクロール処理を取得

  // スクロール処理を簡略化する関数
  const handleScroll = (sectionId) => () => {
    scrollToSection(sectionId);
  };

  return (
    <div className="toc-container">
      <h2 className="toc-title">Contents</h2>
      <ol className="toc-list">
        {/* プラグインの概要 */}
        <li>
          <span onClick={handleScroll('PLUGIN_OVERVIEW')} className="toc-link">プラグインの概要</span>
          <ol>
            <li><span onClick={handleScroll('supported-environments')} className="toc-link">対応環境</span></li>
            <li><span onClick={handleScroll('plugin-burden')} className="toc-link">プラグインのPC負荷について</span></li>
            <li><span onClick={handleScroll('supported-chords')} className="toc-link">対応コード</span></li>
          </ol>
        </li>

        {/* プラグインの使用方法 */}
        <li>
          <span onClick={handleScroll('PLUGIN_USAGE')} className="toc-link">プラグインの使用方法</span>
          <ol>
            <li><span onClick={handleScroll('supported-introduction')} className="toc-link">導入</span></li>
            <li><span onClick={handleScroll('supported-function')} className="toc-link">機能</span></li>
          </ol>
        </li>

        {/* コード検出ロジック */}
        <li>
          <span onClick={handleScroll('CHORD_LOGIC')} className="toc-link">コード検出ロジック</span>
          <ol>
            <li><span onClick={handleScroll('chord-logic-details')} className="toc-link">コード検出ロジックについて</span></li>
          </ol>
        </li>

        {/* プラグインのダウンロード */}
        <li>
          <span onClick={handleScroll('PLUGIN_DOWNLOAD')} className="toc-link">プラグインのダウンロード</span>
        </li>

        {/* POST */}
        <li>
          <span onClick={handleScroll('PLUGIN_POST')} className="toc-link">POST</span>
        </li>
      </ol>
    </div>
  );
}

export default TableOfContents;
