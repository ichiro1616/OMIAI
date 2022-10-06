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

$id_num = 584; //left_or_right = -1 のmovie_idの総数
//$id = 100; //100球分のデータを取り出す
$id = 3;
$c = array(); //該当のmovie_id
$prev = array(); //resultの一つ前のmovie_id
$data = array(); //該当のmovie_idの動画データ
$DATA = array(); //resultの一つ前のmovie_idの動画データ
$sendDATA = array(); //dataとDATAをまとめた配列

try{
    $dbh = new PDO($dsn, $user, $password);
    $sql = <<<EOS
    SELECT `movie_id` FROM `answer` WHERE `left_or_right` = -1;
    EOS;
    $STMT = $dbh->query($sql);
    $all = $STMT->fetchAll(PDO::FETCH_ASSOC);
//--------------------------------------------left_or_right = -1 のmovie_idの取り出し----------------------------------------------------------
    //left_or_right = -1のmovie_idを動画をすべて取り出す
    foreach($all as $a){
        $ALL[] = $a["movie_id"];
    }
    //left_or_right = -1の動画それぞれの回答数
    for($a=0;$a<$id_num;$a++){
        $sql = sprintf("SELECT COUNT(movie_id) FROM `answer` WHERE movie_id = '%s';", $ALL[$a]);
        $ST = $dbh->query($sql);
        $call = $ST->fetchAll(PDO::FETCH_ASSOC);
        foreach($call as $ca){
            $count[]=$ca["COUNT(movie_id)"];
        }
    }
    //回答数が少ない順に並べる
    for($i = 0; $i <$id; $i++){
        $c[] = array_search(min($count),$count);
        $count[$c[$i]] = 100000;
    }
    //$count[]に入っているmovie_idを使って動画データを取り出す
    for($i=0;$i<$id;$i++){
        $sql = sprintf("SELECT `movie_id`,`movie_categorize`, `stop_time`, `movie_path` FROM `movie` WHERE movie_id = '%s';", $ALL[$c[$i]]);
        $stmt = $dbh->query($sql);
        $_data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        foreach($_data as $d){
            $tmp = array(
                "movie_id" => $d['movie_id'],
                "movie_categorize" => $d['movie_categorize'],
                "stop_time" => $d['stop_time'],
                "movie_path" => $d['movie_path'],
            );
            $data[]=$tmp;
        }
    }
//---------------------------------------left_or_right = -1 のmovie_idの1つ前のmovie_id取り出し-------------------------------------------------
    for($j=0; $j<$id; $j++){
        $temp = $ALL[$c[$j]];
        $prev[] = $temp - 1;
    }
    for($k=0;$k<$id;$k++){
        //もし1つ前のmovie_idが0ならテーブルから取り出したデータがnullになってしまうのでここで値を入れる
        if($prev[$k] == 0){
            $tmp = array(
                "movie_id" => 0,
                "movie_categorize" => 1,
                "start_time" => 0,
                "movie_path" => $data[$k]['movie_path'],
            );
        }
        //1つ前のmovie_idが0以外であればmovieテーブルからmovie_idに紐づいたデータを取り出す
        else{
            $sql = sprintf("SELECT `movie_id`,`movie_categorize`, `stop_time`, `movie_path` FROM `movie` WHERE movie_id = '%s';", $prev[$k]);
            $stmt = $dbh->query($sql);
            $_Data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            foreach($_Data as $DA){
            $tmp = array(
                "movie_id" => $DA['movie_id'],
                "movie_categorize" => $DA['movie_categorize'],
                "start_time" => $DA['stop_time'],
                "movie_path" => $DA['movie_path'],
            );
            }
        }
        $Data[]=$tmp;
    }
for($m=0;$m<$id;$m++){
        if($prev[$m] == 0){
            $TMP = array(
                "movie_id" => 0,
                "movie_categorize" => 1,
                "start_time" => 0,
                "movie_path" => $data[$m]['movie_path'],
                );
            }
        elseif($Data[$m]['movie_categorize'] != $data[$m]['movie_categorize']){
            $TMP = array(
                "movie_id" => $Data[$m]['movie_id'],
                "movie_categorize" => $data[$m]['movie_categorize'],
                "start_time" => 0,
                "movie_path" => $data[$m]['movie_path'],
                );
            }
        else{
            $TMP = array(
                "movie_id" => $Data[$m]['movie_id'],
                "movie_categorize" => $Data[$m]['movie_categorize'],
                "start_time" => $Data[$m]['start_time'],
                "movie_path" => $Data[$m]['movie_path'],
                );
        }
        $DATA[]=$TMP;
        }
    $sendDATA[0] = $DATA;
    $sendDATA[1] = $data;
}catch(PDOException $e){
    print('Error:' .$e->getMessage());
    die();
}
//DBとの接続を解除
$dbh = null;
header('Content-type: application/json');
echo json_encode($sendDATA,JSON_UNESCAPED_UNICODE);
?>