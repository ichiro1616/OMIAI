<?php
$movie_id = $_POST['movie_id'];

//DBへの接続時に必要な情報
$dsn = 'mysql:dbname=omiai_db;host=localhost';
$user = 'root';
$password = 'Pa22wadoh';
$data = array();

//dbとの接続試行・データ取得
try{
    $dbh = new PDO($dsn, $user, $password);
    // print('接続に成功しました。<br>');
    $stmt = $dbh->query("SELECT `left_or_right` FROM `answer` WHERE `movie_id` = $movie_id");
    $_data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach($_data as $d){
        $tmp = $d['left_or_right'];
        $data[]=$tmp;
    }

}catch(PDOException $e){
    print('Error:' .$e->getMessage());
    die();
}

$dbh = null; //DBとの接続を解除
header('Content-type: application/json');
echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>