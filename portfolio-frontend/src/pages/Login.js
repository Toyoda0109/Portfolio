import React from 'react';
import { useLogin } from '../hooks/useLogin';
import { useAccessCheck } from '../hooks/useAccessCheck';

const Login = ({ onLoginSuccess }) => {
  const { hasAccess, error } = useAccessCheck();
  const {
    username,
    setUsername,
    password,
    setPassword,
    loginError,
    handleSubmit,
  } = useLogin(onLoginSuccess);

  if (hasAccess === null) {
    return <p>確認中...</p>;
  }

  if (!hasAccess) {
    return <p>アクセスが許可されていません。</p>;
  }

  return (
    <div>
      <h2>管理者ログイン</h2>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default Login;
