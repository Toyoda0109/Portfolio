import { useEffect } from 'react';
import M from 'materialize-css';

export const useCloseOnNavClick = () => {
  useEffect(() => {
    const sidenav = M.Sidenav.init(document.querySelectorAll('.sidenav'));

    const handleClose = () => {
      const sidenavInstance = M.Sidenav.getInstance(document.getElementById('mobile-nav'));
      if (sidenavInstance) {
        sidenavInstance.close();
      }
    };

    // TopとContactのリンクにイベントを追加
    document.querySelectorAll('.sidenav a[href="/#top"], .sidenav a[href="/contact"]').forEach(link => {
      link.addEventListener('click', handleClose);
    });

    return () => {
      document.querySelectorAll('.sidenav a[href="/#top"], .sidenav a[href="/contact"]').forEach(link => {
        link.removeEventListener('click', handleClose);
      });
    };
  }, []);
};
