<?php
//ajaxで取得した情報

$movie_id = $_GET['movie_id'];
$experience_years = $_GET['experience_years'];
$player_id = $_GET['player_id'];
$left_or_right = $_GET['left_or_right'];

// echo json_encode(array(
//     'movie_id' => $movie_id,
//     'experience_years' => $experience_years,
//     'player_id' => $player_id,
//     'left_or_right' => $left_or_right,
// ), JSON_UNESCAPED_UNICODE);

//DBへの接続時に必要な情報
$dsn = 'mysql:dbname=omiai_db;host=localhost';
$user = 'root';
$password = 'Pa22wadoh';

//dbとの接続試行・データ送信
try{
    $dbh = new PDO($dsn, $user, $password);
    // print('接続に成功しました。<br>');
    $sql = "INSERT INTO `answer`(`movie_id`, `experience_years`, `player_id`, `left_or_right`) VALUES ($movie_id,$experience_years,$player_id,$left_or_right)";
    $dbh -> exec($sql);
    $dbh = null; //DBとの接続を解除
}catch(PDOException $e){
    print('Error:' .$e->getMessage());
    die();
}
?>