<?php
//DBへの接続時に必要な情報
$dsn = 'mysql:dbname=omiai_db;host=localhost';
$user = 'root';
$password = 'Pa22wadoh';
$data = array();

//DBとの接続試行
try{
    $dbh = new PDO($dsn, $user, $password);
    // print('接続に成功しました。<br>');
    $stmt = $dbh->query("SELECT `movie_id`, `stop_time`, `movie_path`, `left_player_id`, `right_player_id` FROM `movie` WHERE `movie_categorize`= 1");
    $_data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach($_data as $d){
        $tmp = array(
            "movie_id" => $d['movie_id'],
            "stop_time" => $d['stop_time'],
            "movie_path" => $d['movie_path'],
            "left_player_id" => $d['left_player_id'],
            "right_player_id" => $d['right_player_id']
        );
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