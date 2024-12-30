import { useState } from 'react';

export const useLogin = (onLoginSuccess) => {
  const [loginError, setLoginError] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 環境変数からログインAPIのURLを取得
  const API_LOGIN_URL = process.env.REACT_APP_API_LOGIN_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_LOGIN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // ログイン成功時の処理
        setUsername('');
        setPassword('');
        onLoginSuccess();
        localStorage.setItem('token', data.token);
      } else {
        setLoginError('ログイン失敗: ユーザー名またはパスワードが間違っています。');
      }
    } catch (error) {
      console.error('ログインエラー:', error);
      setLoginError('サーバーとの通信に失敗しました。');
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    loginError,
    handleSubmit,
  };
};
