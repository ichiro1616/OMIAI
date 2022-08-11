<?php

ini_set('display_errors', 1);
date_default_timezone_set('Asia/Tokyo');
$time_stamp = date("Y-m-d H:i:s");


include 'db_config.php';
// $mysqli = new mysqli("localhost", "root", "", "omiai_db");
$sprit_host = explode("=", $dsn)[2];
$host = explode("'", $sprit_host)[0];
$sprit_dbname = explode("=", $dsn)[1];
$dbname = explode(";", $sprit_dbname)[0];
// print $host;
// print $dbname;

$mysqli = new mysqli($host, $user, $password, $dbname);
          

ini_set("max_execution_time",600);


if (!$mysqli) {
  die("データベースの接続に失敗しました．");
}

$command="python ../Python/objectivity_predict.py"; //基本はpython ../Python/subjectivity_predict.py　にしといて、手動で主観的データを入れるときだけ、python ../Python/objectivity_predict.pyと書く。
// $command="python ../Python/subjectivity_predict.py"; 


exec($command,$output);
// $data = json_decode($output,true);
$output = str_replace("'", '"', $output);
var_dump($output);
for($k = 0; $k < count($output); $k++){
$data = json_decode($output[$k], true);


$sql = "SELECT `player_id` FROM `player` WHERE `name` = '{$data[1]}'";

$result_status = mysqli_query($mysqli, $sql);

if (!$result_status) {
  die('データの取得が失敗しました。' . mysqli_error($link));
}

$left_player = mysqli_fetch_all($result_status, MYSQLI_ASSOC);

$sql = "SELECT `player_id` FROM `player` WHERE `name` = '{$data[2]}'";

$result_status = mysqli_query($mysqli, $sql);

if (!$result_status) {
  die('データの取得が失敗しました。' . mysqli_error($link));
}

$right_player = mysqli_fetch_all($result_status, MYSQLI_ASSOC);





// $sql = "SELECT  `lr.coef_id`, `color`, `data`  FROM `lr.coef_` WHERE `type` = {$data[0]} AND `left_player` = {$left_player[0]["player_id"]} AND `right_player` = {$right_player[0]["player_id"]}";
// $result_status = mysqli_query($mysqli, $sql);
// if (!$result_status) {
//   die('データの取得が失敗しました。' . mysqli_error($link));
// }

// $obvious = mysqli_fetch_all($result_status, MYSQLI_ASSOC);

// var_dump($obvious);


$color_array = array('blue', 'red', 'green');
for($i = 0; $i < count($color_array); $i++){
    
    for($j = 0; $j < count($data[$i + 3]); $j++){
      var_dump($data[0]);
      var_dump($color_array[$i]);
      var_dump($left_player[0]["player_id"]);
      var_dump($right_player[0]["player_id"]);
      var_dump($data[$i + 3][$j]);
      var_dump($time_stamp);
      #typeは主観的データの場合は0, 客観的データの場合は1とする
        $sql = "INSERT INTO `lr.coef_`(`type`, `color`, `left_player`, `right_player`, `data`, `date`) VALUES ({$data[0]},  '$color_array[$i]', {$left_player[0]["player_id"]}, {$right_player[0]["player_id"]}, {$data[$i + 3][$j]}, '$time_stamp')";
        $stmt = $mysqli->prepare($sql);
        $stmt->execute();
    }
}
}


// $users = mysqli_fetch_all($result_status, MYSQLI_ASSOC);

mysqli_close($mysqli);

// //JSON形式で出力する
// // header('Content-Type: application/json; charset=UTF-8');
// // echo json_encode($data, JSON_UNESCAPED_UNICODE);