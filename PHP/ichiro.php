<?php

ini_set('display_errors', 1);
date_default_timezone_set('Asia/Tokyo');
$time_stamp = date("Y-m-d H:i:s");


$command="python ../Python/predict.py ";

exec($command,$output);

$data = array($output[0], $output[1], $output[2]);
// var_dump(intval($output[0][0]));
// echo "aaaaaaaa", $output[0];

// $link = mysqli_connect('localhost', 'root', '');
// if (!$link) {
//   die("データベースの接続に失敗しました．");
// }

// $sql = 
// $result_status = mysqli_query($link, $sql);

// if (!$result_status) {
//   die('データの取得が失敗しました。' . mysqli_error($link));
// }


// $users = mysqli_fetch_all($result_status, MYSQLI_ASSOC);

// mysqli_close($link);

//JSON形式で出力する
header('Content-Type: application/json; charset=UTF-8');
echo json_encode($output, JSON_UNESCAPED_UNICODE);