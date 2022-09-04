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

$cate_num = 584; //left_or_right = -1 のmovie_idの総数
$result = array(); //該当のmovie_id
$prev = array(); //resultの一つ前のmovie_id
$data = array(); //該当のmovie_idの動画データ
$DATA = array(); //resultの一つ前のmovie_idの動画データ
$sendDATA = array(); //dataとDATAをまとめた配列

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

//--------------------------------------------left_or_right = -1 のmovie_idの取り出し----------------------------------------------------------
    for($h=0; $h<100; $h++){
        $TMP = $_DATA[$h]['movie_id'];
        $result[] = $TMP;
    }
    for($i=0;$i<100;$i++){
        $sql = sprintf("SELECT `movie_id`,`movie_categorize`, `stop_time`, `movie_path` FROM `movie` WHERE movie_id = '%s';", $result[$i]);
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
    for($j=0; $j<100; $j++){
        $temp = $result[$j];
        $prev[] = $temp - 1;
    }
    for($k=0;$k<100;$k++){
        $sql = sprintf("SELECT `movie_id`,`movie_categorize`, `stop_time`, `movie_path` FROM `movie` WHERE movie_id = '%s';", $prev[$k]);
        $stmt = $dbh->query($sql);
        $_DATA = $stmt->fetchAll(PDO::FETCH_ASSOC);

        for($m=0;$m<100;$m++){
            //-1した結果movie_id=0になってしまった場合はmovie_id=1の最初から再生を行う
            if($_DATA[$m]['movie_id'] == 0){
                $TMP = array(
                    "movie_id" => 1,
                    "movie_categorize" => $data[$m]['movie_categorize'],
                    "start_time" => 0,
                    "movie_path" => $data[$m]['movie_path'],
                );
            }
            //動画が切り替わってしまった場合は、切り替わった後の動画の最初から再生を行う
            elseif($_DATA[$m]['movie_categorize'] != $data[$m]['movie_categorize']){
                $TMP = array(
                    "movie_id" => $data[$m]['movie_id'],
                    "movie_categorize" => $data[$m]['movie_categorize'],
                    "start_time" => 0,
                    "movie_path" => $data[$m]['movie_path'],
                );
            }
            //
            else{
                $TMP = array(
                    "movie_id" => $_DATA[$m]['movie_id'],
                    "movie_categorize" => $_DATA[$m]['movie_categorize'],
                    "start_time" => $_DATA[$m]['stop_time'],
                    "movie_path" => $_DATA[$m]['movie_path'],
                );
            }
            $DATA[]=$tmp;
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