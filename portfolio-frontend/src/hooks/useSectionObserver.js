import { useEffect, useState } from 'react';

export const useSectionObserver = (sections) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (!sections || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50% 0px', 
      }
    );

    // 各セクションを監視
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [sections]);

  return activeSection;
};
