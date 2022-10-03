<?php

ini_set('display_errors', 1);
date_default_timezone_set('Asia/Tokyo');


include 'db_config.php';
$sprit_host = explode("=", $dsn)[2];
$host = explode("'", $sprit_host)[0];
$sprit_dbname = explode("=", $dsn)[1];
$dbname = explode(";", $sprit_dbname)[0];

$mysqli = new mysqli($host, $user, $password, $dbname);
          

ini_set("max_execution_time",10000);


if (!$mysqli) {
  die("データベースの接続に失敗しました．");
}

$command="python ../Python/objectivity_predict.py"; //客観的データを使ってお見合い範囲を計算をするコードに飛ぶ
exec($command,$output);
$output = str_replace("'", '"', $output);

$time_stamp = date("Y-m-d H:i:s");

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

$sql = "SELECT  `lr.coef_id` FROM `lr.coef_` WHERE `type` = {$data[0]} AND `left_player` = {$left_player[0]["player_id"]} AND `right_player` = {$right_player[0]["player_id"]}";
$result_status = mysqli_query($mysqli, $sql);
if (!$result_status) {
  die('データの取得が失敗しました。' . mysqli_error($link));
}

$obvious = mysqli_fetch_all($result_status, MYSQLI_ASSOC);

if($obvious){
  $data_array = array_merge($data[3], $data[4], $data[5]);
  for($i = 0; $i < count($obvious); $i++){
       $sql = "UPDATE `lr.coef_` SET `data`={$data_array[$i]}, `mean_players_sabun_x`={$data[6]},`mean_players_sabun_y`={$data[7]},`mean_player1_ball_sabun_x`={$data[8]},`mean_player1_ball_sabun_y`={$data[9]},`mean_player2_ball_sabun_x`={$data[10]},`mean_player2_ball_sabun_y`={$data[11]},`std_players_sabun_x`={$data[12]},`std_players_sabun_y`={$data[13]},`std_player1_ball_sabun_x`={$data[14]},`std_player1_ball_sabun_y`={$data[15]},`std_player2_ball_sabun_x`={$data[16]},`std_player2_ball_sabun_y`={$data[17]},`datetime`='$time_stamp' WHERE `lr.coef_id` = {$obvious[$i]["lr.coef_id"]}";
       $stmt = $mysqli->prepare($sql);
      $stmt->execute();

  }
}else{

$color_array = array('blue', 'red', 'green');
for($i = 0; $i < count($color_array); $i++){
    
    for($j = 0; $j < count($data[$i + 3]); $j++){
      #typeは主観的データの場合は0, 客観的データの場合は1とする
        $sql = "INSERT INTO `lr.coef_`(`type`, `color`, `left_player`, `right_player`, `data`, `mean_players_sabun_x`, `mean_players_sabun_y`, `mean_player1_ball_sabun_x`, `mean_player1_ball_sabun_y`, `mean_player2_ball_sabun_x`, `mean_player2_ball_sabun_y`, `std_players_sabun_x`, `std_players_sabun_y`, `std_player1_ball_sabun_x`, `std_player1_ball_sabun_y`, `std_player2_ball_sabun_x`, `std_player2_ball_sabun_y`, `datetime`) VALUES ({$data[0]},  '$color_array[$i]', {$left_player[0]["player_id"]}, {$right_player[0]["player_id"]}, {$data[$i + 3][$j]}, {$data[6]}, {$data[7]}, {$data[8]}, {$data[9]}, {$data[10]}, {$data[11]}, {$data[12]}, {$data[13]}, {$data[14]}, {$data[15]}, {$data[16]}, {$data[17]}, '$time_stamp')";
        $stmt = $mysqli->prepare($sql);
        $stmt->execute();
    }
}
}
}

mysqli_close($mysqli);

// JSON形式で出力する
header('Content-Type: application/json; charset=UTF-8');
echo json_encode($data, JSON_UNESCAPED_UNICODE);