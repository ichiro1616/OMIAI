<?php
//DBへの接続時に必要な情報
$experience_years = $_POST["experience_years"];
include 'db_config.php';

$cate_num = 584; //動画の総数
$DATA = array(); //registerテーブルから取得したデータ
$data = array(); //movieテーブルから取得したデータ
$count = array(); //movie_categorizeそれぞれについての回答数
$COUNT = array(); //回答数が最も少ないmovie_categorizeのkeyを格納する。
$c = array(); //回答数が最も少ない動画の中から5つを抽出する。

try{
    $dbh = new PDO($dsn, $user, $password);

    //
    //left_or_right = -1で選択されたexperience_yearsの回答数が少ない動画のmovie_idを取り出す
    $sql = <<<EOS
    SELECT `movie_id`, COUNT(movie_id) FROM `answer`
    WHERE `experience_years` = {$experience_years}
    AND `left_or_right` = -1
    GROUP BY `movie_id`
    ORDER BY `movie_id` ASC;
    EOS;
    $STMT = $dbh->query($sql);
    $_DATA = $STMT->fetchAll(PDO::FETCH_ASSOC);
    foreach($_DATA as $D){
        $TMP = array(
            "m_id" => $D['movie_id'],
            "m_count" => $D['COUNT(movie_id)']
        );
        $DATA[]=$TMP;}
    var_dump($DATA);
    
    //回答数が少ない取り出したmovie_idの数が20未満だった場合は
    //left_or_right = -1が入力されているmovie_idを全て取り出す
    if(count($DATA) < 20){
        $sql = <<<EOS
        SELECT `movie_id` FROM `answer` WHERE `left_or_right` = -1 ORDER BY `movie_id` ASC;
        EOS;
        $STMT = $dbh->query($sql);
        $data = $STMT->fetchAll(PDO::FETCH_ASSOC);
        var_dump($data);
    }


// while(count($c)<5){
//     $ppp = count(array_keys($count,min($count)));
//     for($i = 0; $i <$ppp; $i++){
//         array_push($c,array_keys($count,min($count))[$i]);
//     }
//     for($i = 0; $i < count($c); $i++){
//         $count[$c[$i]] = 100000;
//     }
// }

//回答がある場合は回答が特に少ない順に3つの動画を取り出す
for($i=0;$i<5;$i++){
    $sql = sprintf("SELECT `movie_id`,`movie_categorize`, `stop_time`, `movie_path`, `left_player_id`, `right_player_id` FROM `movie` WHERE movie_categorize = '%s';", $c[$i]+1);
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
}

}catch(PDOException $e){
    print('Error:' .$e->getMessage());
    die();
}

$dbh = null; //DBとの接続を解除
header('Content-type: application/json');
echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>