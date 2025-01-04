<?php
// エラー表示の設定
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// CORS設定
header("Access-Control-Allow-Origin: https://chordin-plugin.com"); // Reactのオリジンを許可
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// データベース接続情報
$dsn = '***';
$username = '***'; // RDSのユーザー名
$password = '***'; // RDSのパスワード

// データベース接続設定
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // エラーモードを例外に設定
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $username, $password, $options);
} catch (PDOException $e) {
    echo json_encode(['error' => 'データベース接続失敗: ' . $e->getMessage()]);
    exit;
}

try {
    // 認証不要でデータを取得
    $stmt = $pdo->query('SELECT id, name, comment, created_at FROM posts ORDER BY created_at DESC');
    $posts = $stmt->fetchAll();
    echo json_encode($posts);
} catch (PDOException $e) {
    echo json_encode(['error' => 'SQLエラー: ' . $e->getMessage()]);
}
