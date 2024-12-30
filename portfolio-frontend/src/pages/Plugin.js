import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import BulletinBoard from './BulletinBoard';
import Login from './Login';
import { useSectionObserver } from '../hooks/useSectionObserver';
import { useAccessCheck } from '../hooks/useAccessCheck';
import PLUGIN_OVERVIEW from './pluginSections/PLUGIN_OVERVIEW'; 
import PLUGIN_USAGE from './pluginSections/PLUGIN_USAGE';
import CHORD_LOGIC from './pluginSections/CHORD_LOGIC';
import PLUGIN_DOWNLOAD from './pluginSections/PLUGIN_DOWNLOAD';
import PLUGIN_POST from './pluginSections/PLUGIN_POST';
import TableOfContents from './pluginSections/TableOfContents';
import './Plugin.css';

function Plugin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // ログイン状態を管理
  const [sections, setSections] = useState([]);         // セクション管理用のステートを追加
  const { hasAccess } = useAccessCheck();               // IP確認結果を取得

  const publishedDate = "2024/11/16";
  const updatedDate = new Date(document.lastModified).toLocaleDateString();  // 最終更新日を取得

  // セクションを監視するためのカスタムフック
  useEffect(() => {
    const mainSections = document.querySelectorAll('#PLUGIN_OVERVIEW, #PLUGIN_USAGE, #CHORD_LOGIC, #PLUGIN_DOWNLOAD, #PLUGIN_POST');
    setSections(mainSections);
  }, []);

  const activeSection = useSectionObserver(sections);  // アクティブなセクションを取得

  // ログイン成功時の処理
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="plugin-page">
      <Sidebar activeSection={activeSection} />

      <div className="plugin-content" id="top">
        <h4 className="plugin-title">【CHORDIN】和音コードをMIDI信号から検知するVSTプラグイン</h4>
        <div className="plugin-meta">
          <span className="tag">DTM</span>
          <span className="tag">Plugin</span>
          <span className="tag">VST</span>
          <span className="tag">和音検出</span>
          <span className="tag">Free</span>
        </div>
        <p>公開日: {publishedDate} 最終更新日: {updatedDate}</p>
        <img src="/img/Plugin_title.png" alt="Plugin Title" className="plugin-title-image" />

        <TableOfContents />
        <PLUGIN_OVERVIEW />
        <PLUGIN_USAGE />
        <CHORD_LOGIC />
        <PLUGIN_DOWNLOAD />
        <PLUGIN_POST />

  
        <BulletinBoard isAdmin={isLoggedIn} />
        {hasAccess && !isLoggedIn && (
          <Login onLoginSuccess={handleLoginSuccess} />
        )}
      </div>
    </div>
  );
}

export default Plugin;
