import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className = "footer">
      <p>© 2024 muzicA</p>
      <div className = "social-icon">
        <a href="/contact">
          <img src="/img/Skill_Icon/Gmail-Light.svg" alt="Email" className="social-icon" />
        </a>
        <a href="https://github.com/Toyoda0109" target="_blank" rel="noopener noreferrer">
          <img src="/img/Skill_Icon/Github-Dark.svg" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://x.com/muzicA3939" target="_blank" rel="noopener noreferrer">
          <img src="/img/Skill_Icon/x.svg" alt="x" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
