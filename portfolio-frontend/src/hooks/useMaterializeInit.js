import { useEffect } from 'react';
import M from 'materialize-css';

export const useMaterializeInit = () => {
  useEffect(() => {
    const sidenav = document.querySelectorAll('.sidenav');
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Sidenav.init(sidenav);
    M.Dropdown.init(dropdowns, {
      coverTrigger: false,
    });
  }, []);
};

