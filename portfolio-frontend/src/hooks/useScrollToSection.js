// useScrollToSection.js
import { useCallback } from 'react';

/**
 * useScrollToSection - セクションにスムーズスクロールするカスタムフック
 * @returns {Function} スクロールを実行する関数
 */
const useScrollToSection = () => {
  const scrollToSection = useCallback((id) => {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
  }, []);

  return scrollToSection;
};

export default useScrollToSection;
