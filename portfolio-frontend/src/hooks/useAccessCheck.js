import { useEffect, useState } from 'react';

export const useAccessCheck = () => {
  const [hasAccess, setHasAccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_AUTH_URL = process.env.REACT_APP_API_AUTH_URL;

    const checkAccess = async () => {
      try {
        const response = await fetch(API_AUTH_URL, {
          method: 'GET',
        });

        if (response.ok) {
          const data = await response.json();
          setHasAccess(data.access);
        } else {
          setHasAccess(false);
        }
      } catch (err) {
        console.error('アクセス確認エラー:', err);
        setError('サーバーとの通信に失敗しました。');
        setHasAccess(false);
      }
    };

    checkAccess();
  }, []);

  return { hasAccess, error };
};
