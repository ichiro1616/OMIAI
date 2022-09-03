<?php
// ・該当の動画のmovie_idを-1した値の場所のstop_time
// ・movie_id = 4, 5, 6 
// →4の動画が流れて4のstop_timeの位置で一時停止する
// →次に5が4のstop_timeから再生される
// 　→→特別な処理は書かない
// →同じmovie_categorizeじゃないとstop_timeが意味を成さない

// 一個前のstop_timeを取り出してくるときに同じmovie_categorizeのmovie_idが一個前のstop_timeを取り出してくる
// →この条件で検索して、stop_timeが存在しなければ、動画を最初から再生


//DBへの接続時に必要な情報
$experience_years = $_POST["experience_years"];
include 'db_config.php';

$cate_num = 584; //動画の総数
$DATA = array(); //registerテーブルから取得したデータ
$data = array(); //movieテーブルから取得したデータ
$count = array(); //movie_categorizeそれぞれについての回答数
$COUNT = array(); //回答数が最も少ないmovie_categorizeのkeyを格納する。
$c = array(); //回答数が最も少ない動画の中から5つを抽出する。
$prev = array(); //一つ前のmovie_id

try{
    $dbh = new PDO($dsn, $user, $password);
    $sql = <<<EOS
    SELECT `movie_id`
    FROM `answer` WHERE `left_or_right` = -1
    GROUP BY `movie_id`
    ORDER BY COUNT(movie_id) ASC;
    EOS;
    $STMT = $dbh->query($sql);
    $_DATA = $STMT->fetchAll(PDO::FETCH_ASSOC);

    //回答数が少ない順に100球分のmovie_idを取り出す
    for($j=0; $j<100; $j++){
        $TMP = $_DATA[$j]['movie_id'];
        $DATA[] = $TMP;
    }

    //取り出したmovie_idから-1した値の配列をつくる
    for($h=0; $h<100; $h++){
        $temp = $DATA[$h];
        $prev[] = $temp;
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