import { useState, useEffect } from 'react';

export const useAdminIp = () => {
  const [isAdminIp, setIsAdminIp] = useState(false);

  useEffect(() => {
    const checkAdminIp = async () => {
      try {
        const API_AUTH_URL = process.env.REACT_APP_API_AUTH_URL;

        if (!API_AUTH_URL) {
          console.error('環境変数 REACT_APP_API_AUTH_URL が設定されていません');
          return;
        }

        const response = await fetch(API_AUTH_URL);
        const data = await response.json();

        if (data.isAdmin) {
          setIsAdminIp(true);
        } else {
          console.error('管理者IPではありません');
        }
      } catch (error) {
        console.error('IPチェックに失敗しました', error);
      }
    };

    checkAdminIp();
  }, []);

  return isAdminIp;
};
