import React from 'react';
import useScrollToSection from '../hooks/useScrollToSection';
import './Sidebar.css';

function Sidebar({ activeSection }) {
  console.log('Active section in Sidebar:', activeSection);

  // useScrollToSection.jsからスクロール関数を取得
  const scrollToSection = useScrollToSection();

  // ページ遷移後にスクロールを実行する共通関数
  const handleScroll = (sectionId) => () => {
    // ページ遷移後にスクロールを実行
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 0);
  };

  return (
    <aside className="sidebar">
      <ul className="sidebar-mainlist">
        <li className="sidebar-item">
          <span className="bullet"></span>
          <a
            onClick={handleScroll('PLUGIN_OVERVIEW')}
            className={`sidebar-main-heading ${activeSection === 'PLUGIN_OVERVIEW' ? 'active' : ''}`}
          >
            プラグインの概要
          </a>
          <ul className="sidebar-sublist">
            <li className="sidebar-subitem">
              <span className="bullet-sub"></span>
              <a
                onClick={handleScroll('supported-environments')}
                className="sidebar-sub-heading"
              >
                対応環境
              </a>
            </li>
            <li className="sidebar-subitem">
              <span className="bullet-sub"></span>
              <a
                onClick={handleScroll('plugin-burden')}
                className="sidebar-sub-heading"
              >
                プラグインのPC負荷について
              </a>
            </li>
            <li className="sidebar-subitem">
              <span className="bullet-sub"></span>
              <a
                onClick={handleScroll('supported-chords')}
                className="sidebar-sub-heading"
              >
                対応コード
              </a>
            </li>
          </ul>
        </li>

        {/* プラグインの使用方法 */}
        <li className="sidebar-item">
          <span className="bullet"></span>
          <a
            onClick={handleScroll('PLUGIN_USAGE')}
            className={`sidebar-main-heading ${activeSection === 'PLUGIN_USAGE' ? 'active' : ''}`}
          >
            プラグインの使用方法
          </a>
          <ul className="sidebar-sublist">
            <li className="sidebar-subitem">
              <span className="bullet-sub"></span>
              <a
                onClick={handleScroll('supported-introduction')}
                className="sidebar-sub-heading"
              >
                導入
              </a>
            </li>
            <li className="sidebar-subitem">
              <span className="bullet-sub"></span>
              <a
                onClick={handleScroll('supported-function')}
                className="sidebar-sub-heading"
              >
                機能
              </a>
            </li>
          </ul>
        </li>

        {/* コード検出ロジック */}
        <li className="sidebar-item">
          <span className="bullet"></span>
          <a
            onClick={handleScroll('CHORD_LOGIC')}
            className={`sidebar-main-heading ${activeSection === 'CHORD_LOGIC' ? 'active' : ''}`}
          >
            コード検出ロジック
          </a>
          <ul className="sidebar-sublist">
            <li className="sidebar-subitem">
              <span className="bullet-sub"></span>
              <a
                onClick={handleScroll('chord-logic-details')}
                className="sidebar-sub-heading"
              >
                コード検出ロジックについて
              </a>
            </li>
          </ul>
        </li>

        {/* プラグインのダウンロード */}
        <li className="sidebar-item">
          <span className="bullet"></span>
          <a
            onClick={handleScroll('PLUGIN_DOWNLOAD')}
            className={`sidebar-main-heading ${activeSection === 'PLUGIN_DOWNLOAD' ? 'active' : ''}`}
          >
            プラグインのダウンロード
          </a>
        </li>

        {/* POST */}
        <li className="sidebar-item">
          <span className="bullet"></span>
          <a
            onClick={handleScroll('PLUGIN_POST')}
            className={`sidebar-main-heading ${activeSection === 'PLUGIN_POST' ? 'active' : ''}`}
          >
            POST
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
