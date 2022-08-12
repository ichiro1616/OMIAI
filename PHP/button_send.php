<?php
//ajaxで取得した情報
$movie_id = $_POST['movie_id'];
$movie_categorize = $_POST['movie_categorize'];
$experience_years = $_POST['experience_years'];
$player_id = $_POST['player_id'];
$left_or_right = $_POST['left_or_right'];

include '../PHP/db_config.php';

//dbとの接続試行・データ送信
try{
    $dbh = new PDO($dsn, $user, $password);
    // print('接続に成功しました。<br>');
    $sql = "INSERT INTO `answer`(`movie_id`, `movie_categorize`, `experience_years`, `player_id`, `left_or_right`) VALUES ($movie_id,$movie_categorize,$experience_years,$player_id,$left_or_right)";
    $dbh -> query($sql);
    print("登録しました！");
    
    $dbh = null; //DBとの接続を解除
}catch(PDOException $e){
    print('Error:' .$e->getMessage());
    die();
}
?>