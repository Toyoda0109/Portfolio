import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Plugin from './pages/Plugin';
import About from './pages/About';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-wrapper">
          <ConditionalSidebar />
          <main className="content">
            <Routes>
              <Route path="/plugin" element={<Plugin />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Plugin />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function ConditionalSidebar() {
  const location = useLocation();  // 現在のURLパスを取得
  const noSidebarPaths = ['/about', '/contact'];

  // 現在のパスがnoSidebarPathsに含まれている場合はnullを返し、サイドバーを表示しない
  if (noSidebarPaths.includes(location.pathname)) {
    return null;
  }

  // それ以外の場合はサイドバーを表示
  return <Sidebar />;
}

export default App;
