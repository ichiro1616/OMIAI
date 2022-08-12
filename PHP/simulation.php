<?php
// $id = $_POST['player_id'];
// $dsn = 'mysql:dbname=omiai_db;host=localhost';
// $user = 'root';
// $password = 'Pa22wadoh';
include '../PHP/db_config.php';

$result = array();
// $result2 = array();

try {
    $dbh = new PDO($dsn, $user, $password);

    // 最新の2550個のレコードを取得
    $sql = "SELECT * FROM `lr.coef_` ORDER BY `lr.coef_id` DESC LIMIT 255";
    $stmt = $dbh->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll();


// 指定したid以外で、指定したball_idと同じball_idのid、名前などの値をランダムで取得
// $sql2 = "SELECT * FROM `users` WHERE NOT (`id` = $id) AND `ball_id` = {$result[0]["ball_id"]} ORDER BY RAND() LIMIT 4";
// $stmt2 = $dbh->prepare($sql2);
// $stmt2->execute();
// $result2 = $stmt2->fetchAll();
// $result_arr = array($result, $result2);
} catch (Exception$e) {
    echo$e->getMessage();
    exit();
}

header('Content-type: application/json');
echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>