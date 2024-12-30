import React, { useState, useEffect } from 'react';
import useAnimationComplete from '../hooks/useAnimationComplete';
import './HelloWorldAnimation.css';

const HelloWorldAnimation = () => {
  const text = "Hello World!";
  const [displayedText, setDisplayedText] = useState([]);
  const animationComplete = useAnimationComplete(2500); // アニメーション完了後に表示(2500ms)

  useEffect(() => {
    setDisplayedText(text.split(''));
  }, []);

  return (
    <div className="hello-world-container">
      {/* フェードアウト後にスライドするオーバーレイ */}
      {!animationComplete && (
        <>
          <div className="left-triangle-overlay delay-negative0"></div>
          <div className="right-triangle-overlay delay-negative0"></div>
          <div className="left-triangle-overlay delay-negative1"></div>
          <div className="right-triangle-overlay delay-negative1"></div>
          <div className="left-triangle-overlay delay-negative2"></div>
          <div className="right-triangle-overlay delay-negative2"></div>
          <div className="left-triangle-overlay delay-negative3"></div>
          <div className="right-triangle-overlay delay-negative3"></div>
          <div className="left-triangle-overlay"></div>
          <div className="right-triangle-overlay"></div>
          <div className="left-triangle-overlay delay-positive"></div>
          <div className="right-triangle-overlay delay-positive"></div>
        </>
      )}
      
      {/* 白い枠線と文字を包むコンテナ */}
      <div className="hello-world-border">
        <h1 className="hello-world-text">
          {displayedText.map((char, index) => (
            <span key={index} className="wave-text" style={{ animationDelay: `${index * 0.1}s` }}>
              {char}
            </span>
          ))}
        </h1>
      </div>
      <div className="underline"></div>
    </div>
  );
};

export default HelloWorldAnimation;
