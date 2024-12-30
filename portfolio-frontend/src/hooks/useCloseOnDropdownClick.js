import { useEffect } from 'react';
import M from 'materialize-css';

export const useCloseOnDropdownClick = () => {
  useEffect(() => {
    const sidenav = M.Sidenav.init(document.querySelectorAll('.sidenav'));

    const handleDropdownClose = () => {
      const sidenavInstance = M.Sidenav.getInstance(document.getElementById('mobile-nav'));
      if (sidenavInstance) {
        setTimeout(() => sidenavInstance.close(), 150);  // ドロップダウン後に少し遅らせて閉じる
      }
    };

    document.querySelectorAll('.dropdown-content a').forEach(link => {
      link.addEventListener('click', handleDropdownClose);
    });

    return () => {
      document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.removeEventListener('click', handleDropdownClose);
      });
    };
  }, []);
};
