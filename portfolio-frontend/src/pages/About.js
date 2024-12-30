import React, { useRef } from 'react';
import './about.css'; 
import HelloWorldAnimation from '../components/HelloWorldAnimation'; 
import useAnimationComplete from '../hooks/useAnimationComplete';
import { useBlurEffect } from '../hooks/useBlurEffect';

function About() {
  // 2.5秒間のアニメーションの完了状態を管理
  const animationComplete = useAnimationComplete(2500);
  
  // 各セクションの参照を作成
  const headerRef = useRef(null);
  const profileSectionRef = useRef(null);
  const aboutWebsiteRef = useRef(null);
  const skillsRef = useRef(null);
  const introductionRef = useRef(null);

  // 各セクションにぼやけエフェクトを適用
  useBlurEffect([
    headerRef, 
    profileSectionRef, 
    aboutWebsiteRef, 
    skillsRef, 
    introductionRef
  ]);

  return (
    <div className="about-pages">
      {!animationComplete ? (
        <HelloWorldAnimation />
      ) : (
        <div>
          <img 
            src="/img/About_Header.png" 
            alt="Portfolio Header" 
            className="portfolio-header-img blur-in" 
            ref={headerRef} 
            draggable="false" 
          />
          <div className="about-container">
            
            <section id="PROFILE_SECTION" className="profile-section blur-in" ref={profileSectionRef}>
            <h1 class="about-head-title">Profile</h1>
              <div className="profile-content">
                <div className="profile-icon">
                  <img 
                    src="/img/About_Icon.png" 
                    alt="Profile" 
                    className="profile-img" 
                    draggable="false" 
                  />
                </div>
                <div className="profile-info">
                  <h3>KODAI TOYODA</h3>
                  <p>
                    26卒, 情報理工学部の大学生です。ITエンジニアを目指しており、フロントエンドとバックエンドの両面でのスキル向上を目指しています。
                    大学では動的計画法や遺伝的アルゴリズムを活用した作曲支援ソフトの開発に取り組んでいます。作曲とプログラミングが好きで、作曲活動も行っています。
                  </p>

                  <div className="social-links">
                    <a href="https://github.com/Toyoda0109" target="_blank" rel="noopener noreferrer">
                      <img src="/img/Skill_Icon/Github-Dark.svg" alt="GitHub" className="social-icon" />
                    </a>
                    <a href="/contact">
                      <img src="/img/Skill_Icon/Gmail-Light.svg" alt="Email" className="social-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section id="ABOUT_WEBSITE_SECTION" className="about-website-section blur-in" ref={aboutWebsiteRef}>
            <h1 class="about-head-title">About this website</h1>
              <div className="about-website-content">
                <p>
                  このWebサイトは、作曲支援のために作成したVSTプラグインを配布する目的で制作しました。
                  DAW上で多様なコードを検知できるプラグインが見つからず、作成することにしました。
                  音楽活動をしているものの音楽理論に不安がある方(自分のように）の助けになれば嬉しいです。また、このWebサイトは自分のポートフォリオとしても兼ねています。
                </p>
                <p>
                  下記には、Webサイト作成に使用した言語やフレームワークを紹介しています。
                </p>
  
                <div className="tech-section">
                  <h2>Frontend</h2>
                  <div className="tech-grid">
                    <div className="tech-item">
                      <img src="/img/Skill_Icon/React-Light.svg" alt="React" className="tech-img" />
                      <p>React: サイトのユーザーインターフェースの構築やコンポーネントの管理</p>
                    </div>
                    <div className="tech-item">
                      <img src="/img/Skill_Icon/CSS.svg" alt="CSS" className="tech-img" />
                      <p>CSS: Webサイト全体のデザインやレイアウト(Materialize Css)</p>
                    </div>
                    <div className="tech-item">
                      <img src="/img/Skill_Icon/JavaScript.svg" alt="JavaScript" className="tech-img" />
                      <p>JavaScript: ユーザーの操作に応じた動的なコンテンツの表示</p>
                    </div>
                  </div>
                </div>

                <div className="tech-section">
                  <h2>Backend</h2>
                  <div className="tech-grid">
                    <div className="tech-item">
                      <img src="/img/Skill_Icon/NodeJS-Light.svg" alt="Node.js" className="tech-img" />
                      <p>Node.js: Contactページにおけるメール送信機能(Express.js)</p>
                    </div>
                    <div className="tech-item">
                      <img src="/img/Skill_Icon/PHP-Light.svg" alt="PHP" className="tech-img" />
                      <p>PHP: Postでの簡易掲示板機能</p>
                    </div>
                    <div className="tech-item">
                      <img src="/img/Skill_Icon/MySQL-Light.svg" alt="MySQL" className="tech-img" />
                      <p>MySQL: 掲示板のデータ管理</p>
                    </div>
                    <div className="tech-item">
                      <img src="/img/Skill_Icon/AWS-Light.svg" alt="AWS" className="tech-img" />
                      <p>AWS: 本Webサイトのデプロイ</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="SKILLS_SECTION" className="skills-section blur-in" ref={skillsRef}>
              <h1 class="about-head-title">Skills</h1>
              <div className="skills-content">
                <p>
                  このセクションでは、その他使用したことのあるプログラミング言語やツールを提示しています。(実務経験は御座いません)
                </p>
                <div className="skills-subsection">
                  <h2>Languages</h2>
                  <div className="tech-grid">
                    <div className="tech-item">
                      <img src="/img/Skill_Icon/Java-Light.svg" alt="Java" className="tech-img" />
                    </div>
                    <div className="tech-item">
                      <img src="/img/Skill_Icon/CPP.svg" alt="Cpp" className="tech-img" />
                    </div>
                    <div className="tech-item">
                      <img src="/img/Skill_Icon/C.svg" alt="C" className="tech-img" />
                    </div>
                    <div className="tech-item">
                      <img src="/img/Skill_Icon/Python-Light.svg" alt="Python" className="tech-img" />
                    </div>
                    <div className="tech-item">
                      <img src="/img/Skill_Icon/HTML.svg" alt="HTML" className="tech-img" />
                    </div>
                  </div>
                  <div className="tech-descriptions">
                    <li>Java: 作曲支援ソフトの開発を行う研究に使用しています</li>
                    <li>C++: 和音コード検知プラグインに使用しています</li>
                    <li>C, Python: 大学のカリキュラム上で学習、基本的なアルゴリズムやデータ構造など</li>
                    <li>HTML: Web開発等</li>
                  </div>
                </div>

                <div className="skills-subsection">
                  <h2>Tools</h2>
                    <div className="tech-grid">
                      <div className="tech-item">
                        <img src="/img/Skill_Icon/Github-Dark.svg" alt="Git" className="tech-img" />
                      </div>
                      <div className="tech-item">
                        <img src="/img/Skill_Icon/Git.svg" alt="Git" className="tech-img" />
                      </div>
                      <div className="tech-item">
                        <img src="/img/Skill_Icon/Eclipse-Light.svg" alt="Eclipse" className="tech-img" />
                      </div>
                      <div className="tech-item">
                        <img src="/img/Skill_Icon/VisualStudio-Light.svg" alt="VisualStudio" className="tech-img" />
                      </div>
                    </div>
                    <div className="tech-descriptions">
                      <li>Github, Git: 開発におけるバージョン管理、コード管理</li>
                      <li>Eclipse, Vscode: コードエディタ</li>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
      )}
    </div>
  );
}

export default About;
