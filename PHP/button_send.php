<?php
//DBへの接続時に必要な情報
$dsn = 'mysql:dbname=omiai_db;host=localhost';
$user = 'root';
$password = 'Pa22wadoh';
$data = array();

//dbとの接続試行・データ送信
try{
    $dbh = new PDO($dsn, $user, $password);
    // print('接続に成功しました。<br>');
    $stmt = $dbh->query("INSERT INTO `answer`(`movie_id`, `experience_years`, `player_id`, `left_or_right`) VALUES (movie_id,experience_years,player_id,button_id)");
    $_data = $stmt->fetchAll(PDO::FETCH_ASSOC);

}catch(PDOException $e){
    print('Error:' .$e->getMessage());
    die();
}

$dbh = null; //DBとの接続を解除
?>