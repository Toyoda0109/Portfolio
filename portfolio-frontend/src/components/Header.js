import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollVisibility } from '../hooks/useScrollVisibility';
import { useMaterializeInit } from '../hooks/useMaterializeInit';
import { useCloseOnDropdownClick } from '../hooks/useCloseOnDropdownClick';
import useScrollToSection from '../hooks/useScrollToSection';
import M from 'materialize-css';
import './header.css';

function Header() {
  const isVisible = useScrollVisibility();
  useMaterializeInit();
  useCloseOnDropdownClick();
  const scrollToSection = useScrollToSection();
  const location = useLocation();

  const logo = location.pathname === '/about' ? '/img/Portfolio_LOGO.png' : '/img/CHORDIN_LOGO.png';

  const handleNavLinkClick = () => {
    // IDでサイドナビの要素を取得
    const sidenavElement = document.getElementById('mobile-nav');
  
    // Materializeのインスタンスを取得
    const sidenavInstance = M.Sidenav.getInstance(sidenavElement);
  
    // インスタンスが存在すれば閉じる
    if (sidenavInstance) {
      sidenavInstance.close();
    }
  };

  // ページ遷移後にスクロールを実行する共通関数
  const handleScrollToSection = (sectionId) => () => {
    // ページ遷移後にスクロールを実行
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 0); // ページ遷移直後に実行
  };

  return (
    <header className={isVisible ? 'visible' : 'hidden'}>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <img src={logo} alt="Logo" />
          </Link>
          <a data-target="mobile-nav" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/" onClick={handleScrollToSection('top')}>Top</Link></li>
            <li><a className="dropdown-trigger" data-target="plugin-dropdown">Plugin</a></li>
            <li><a className="dropdown-trigger" data-target="about-dropdown">About</a></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Plugin ドロップダウンメニュー */}
      <ul id="plugin-dropdown" className="dropdown-content">
        <li><Link to="/plugin" onClick={handleScrollToSection('PLUGIN_OVERVIEW')}>プラグインの概要</Link></li>
        <li><Link to="/plugin" onClick={handleScrollToSection('PLUGIN_USAGE')}>プラグインの使用方法</Link></li>
        <li><Link to="/plugin" onClick={handleScrollToSection('PLUGIN_DOWNLOAD')}>プラグインのダウンロード</Link></li>
        <li><Link to="/plugin" onClick={handleScrollToSection('PLUGIN_POST')}>POST</Link></li>
      </ul>

      {/* About ドロップダウンメニュー */}
      <ul id="about-dropdown" className="dropdown-content">
        <li><Link to="/about" onClick={handleScrollToSection('PROFILE_SECTION')}>Profile</Link></li>
        <li><Link to="/about" onClick={handleScrollToSection('ABOUT_WEBSITE_SECTION')}>About this website</Link></li>
        <li><Link to="/about" onClick={handleScrollToSection('SKILLS_SECTION')}>Skills</Link></li>
      </ul>

      {/* モバイル用サイドナビ */}
      <ul className="sidenav" id="mobile-nav">
        <li><Link to="/" onClick={handleScrollToSection('top')}>Top</Link></li>
        <li><a className="dropdown-trigger" data-target="plugin-dropdown-mobile">Plugin</a></li>
        <li><a className="dropdown-trigger" data-target="about-dropdown-mobile">About</a></li>
        <li><Link to="/contact" onClick={handleNavLinkClick}>Contact</Link></li>
      </ul>

      {/* モバイル用 Plugin ドロップダウン */}
      <ul id="plugin-dropdown-mobile" className="dropdown-content">
        <li><Link to="/plugin" onClick={handleScrollToSection('PLUGIN_OVERVIEW')}>プラグインの概要</Link></li>
        <li><Link to="/plugin" onClick={handleScrollToSection('PLUGIN_USAGE')}>プラグインの使用方法</Link></li>
        <li><Link to="/plugin" onClick={handleScrollToSection('PLUGIN_DOWNLOAD')}>プラグインのダウンロード</Link></li>
        <li><Link to="/plugin" onClick={handleScrollToSection('PLUGIN_POST')}>POST</Link></li>
      </ul>

      {/* モバイル用 About ドロップダウン */}
      <ul id="about-dropdown-mobile" className="dropdown-content">
        <li><Link to="/about" onClick={handleScrollToSection('PROFILE_SECTION')}>Profile</Link></li>
        <li><Link to="/about" onClick={handleScrollToSection('ABOUT_WEBSITE_SECTION')}>About this website</Link></li>
        <li><Link to="/about" onClick={handleScrollToSection('SKILLS_SECTION')}>Skills</Link></li>
      </ul>
    </header>
  );
}

export default Header;
