import React, { useState, useEffect } from 'react';

const BulletinBoard = ({ isAdmin }) => {
  const [posts, setPosts] = useState([]);

  // 環境変数からエンドポイントを取得
  const API_FETCH_POSTS_URL = process.env.REACT_APP_API_FETCH_POSTS_URL;
  const API_SUBMIT_POST_URL = process.env.REACT_APP_API_SUBMIT_POST_URL;

  // 投稿一覧を取得する関数
  const fetchPosts = async () => {
    try {
      const response = await fetch(API_FETCH_POSTS_URL);

      if (!response.ok) {
        throw new Error(`HTTPエラー: ${response.status}`);
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('投稿の取得に失敗しました', error);
    }
  };

  useEffect(() => {
    fetchPosts(); // 初回ロード時に投稿一覧を取得
  }, []);

  // 投稿を送信する関数（管理者専用）
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // 管理者トークンを取得
    const comment = e.target.comment.value;

    try {
      const response = await fetch(API_SUBMIT_POST_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name: '管理者', comment }), // 名前を固定で送信
      });

      const result = await response.json();
      if (result.success) {
        fetchPosts(); // 成功後に投稿一覧を更新
        e.target.reset(); // フォームをリセット
      } else {
        console.error(`投稿エラー: ${result.error}`);
      }
    } catch (error) {
      console.error(`リクエストエラー: ${error.message}`);
    }
  };

  return (
    <div>
      {/* 投稿フォーム（管理者のみ表示） */}
      {isAdmin && (
        <div>
          <form onSubmit={handleSubmit}>
            <textarea name="comment" placeholder="コメントを入力" required />
            <button type="submit">投稿</button>
          </form>
          <button
            onClick={() => {
              localStorage.removeItem('token'); // トークンを削除
              window.location.reload(); // ページをリロードして状態をリセット
            }}
            style={{ marginTop: '10px' }}
          >
            ログアウト
          </button>
        </div>
      )}

      <ul>
        {posts.map((post, index) => (
          <li key={index} style={{ marginBottom: '15px' }}>
            <strong style={{ color: 'blue' }}>{post.name}</strong>: {new Date(post.created_at).toLocaleString()}
            <p>{post.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletinBoard;
