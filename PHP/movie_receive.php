<?php
//DBへの接続時に必要な情報
$dsn = 'mysql:dbname=omiai_db;host=localhost';
$user = 'root';
$password = 'Pa22wadoh';
$DATA = array();
$data = array();

//dbとの接続試行・データ取得
try{
    $dbh = new PDO($dsn, $user, $password);

    //全体の中で回答が最も少ない動画を5つについて、idとcategorizeを取り出す
    // $STMT = $dbh->query("SELECT movie_id ,movie_categorize, COUNT(movie_categorize) FROM answer GROUP BY movie_categorize ORDER BY COUNT(movie_categorize) ASC limit 5;");
    $STMT = $dbh->query("SELECT movie_id ,movie_categorize, COUNT(movie_categorize) FROM answer GROUP BY movie_categorize ORDER BY COUNT(movie_categorize) ASC limit 3;");
    $_DATA = $STMT->fetchAll(PDO::FETCH_ASSOC);

    foreach($_DATA as $D){
        $TMP = array(
            "m_id" => $D['movie_id'],
            "m_cate" => $D['movie_categorize'],
        );
        $DATA[]=$TMP;
        }
    $c = array_column($DATA,'m_cate');

    //上で抽出した5つの動画についての全データを取り出す
    // $stmt = $dbh->query("SELECT `movie_id`,`movie_categorize`, `stop_time`, `movie_path`, `left_player_id`, `right_player_id` FROM `movie` WHERE movie_categorize = %s OR movie_categorize =%s OR movie_categorize =%s OR movie_categorize =%s OR movie_categorize =%s;",$DATA[0],$DATA[1],$DATA[2],$DATA[3],$DATA[4]);
    $sql = sprintf("SELECT `movie_id`,`movie_categorize`, `stop_time`, `movie_path`, `left_player_id`, `right_player_id` FROM `movie` WHERE movie_categorize = '%s' OR movie_categorize = '%s' OR movie_categorize = '%s';", $c[0],$c[1],$c[2]);
    $stmt = $dbh->query($sql);
    $_data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach($_data as $d){
        $tmp = array(
            "movie_id" => $d['movie_id'],
            "movie_categorize" => $d['movie_categorize'],
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