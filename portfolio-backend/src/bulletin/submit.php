<?php
// エラー表示の設定
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// CORS設定
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: https://chordin-plugin.com"); // Reactのオリジンを許可
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// プリフライトリクエスト対応
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0); // OPTIONSリクエスト（CORSのプリフライト）の場合、空のレスポンスを返して終了
}

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

// フォームデータを取得
$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'] ?? '';
$comment = $data['comment'] ?? '';

// バリデーション
if ($name !== '' && $comment !== '') {
    try {
        // データベースに挿入
        $stmt = $pdo->prepare('INSERT INTO posts (name, comment) VALUES (:name, :comment)');
        $stmt->execute(['name' => $name, 'comment' => $comment]);
        echo json_encode(['success' => true]);
    } catch (PDOException $e) {
        echo json_encode(['error' => 'SQLエラー: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['error' => '名前またはコメントが不足しています']);
}
