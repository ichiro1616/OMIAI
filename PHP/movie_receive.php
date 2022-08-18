<?php
//DBへの接続時に必要な情報
$experience_years = $_POST["experience_years"];
include 'db_config.php';

$cate_num = 90; //動画の総数
$DATA = array(); //registerテーブルから取得したデータ
$data = array(); //movieテーブルから取得したデータ
$count = array(); //movie_categorizeそれぞれについての回答数
$COUNT = array(); //回答数が最も少ないmovie_categorizeのkeyを格納する。
$c = array(); //回答数が最も少ない動画の中から5つを抽出する。

try{
    $dbh = new PDO($dsn, $user, $password);

    $sql = <<<EOS
    SELECT `movie_id` ,`movie_categorize`, COUNT(movie_categorize) 
    FROM `answer` 
    WHERE `experience_years` = {$experience_years} 
    GROUP BY `movie_categorize` 
    ORDER BY `movie_categorize` ASC;
    EOS;

    //選択された経験年数のうちで、回答数が少ない順にidとcategorizeを取り出す
    $STMT = $dbh->query($sql);
    $_DATA = $STMT->fetchAll(PDO::FETCH_ASSOC);
    foreach($_DATA as $D){
        $TMP = array(
            "m_id" => $D['movie_id'],
            "m_cate" => $D['movie_categorize'],
            "m_count" => $D['COUNT(movie_categorize)']
        );
        $DATA[]=$TMP;}
    //registerテーブルが空だったときでも正常に動くようにする処理(回答数がnullの場所に0を入れる)
    for($i = 0; $i < $cate_num; $i++){
        //データが$i番目の時にm_cateがfalseであれば、回答データは存在しないのでcountに0を入れる
        if(isset($DATA[$i]["m_cate"]) == false){
                $count[$i] =  0;
            }
        //データが$i番目の時にm_cateがtrueであれば、回答データをcountに入れる
        if(isset($DATA[$i]["m_cate"]) == true){
            $count[$i] = $DATA[$i]["m_count"];
        }
    }

while(count($c)<5){
    $ppp = count(array_keys($count,min($count)));
    for($i = 0; $i <$ppp; $i++){
        array_push($c,array_keys($count,min($count))[$i]);
    }
    for($i = 0; $i < count($c); $i++){
        $count[$c[$i]] = 100000;
    }
}

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