<?php
//ajaxで取得した情報
$movie_id = $_POST['movie_id'];
$movie_categorize = $_POST['movie_categorize'];
$experience_years = $_POST['experience_years'];
$left_or_right = $_POST['left_or_right'];

include 'db_config.php';

//dbとの接続試行・データ送信
try{
    $dbh = new PDO($dsn, $user, $password);
    $sql = "INSERT INTO `answer`(`movie_id`, `movie_categorize`, `experience_years`,`left_or_right`) VALUES ($movie_id,$movie_categorize,$experience_years,$left_or_right)";
    $dbh -> query($sql);
    print("登録しました！");
    //DBとの接続を解除
    $dbh = null;
}catch(PDOException $e){
    print('Error:' .$e->getMessage());
    die();
}
?>