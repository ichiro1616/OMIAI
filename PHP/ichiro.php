<?php

include 'db_config.php';

$result = array();
// $command="python ../Python/objectivity_predict_copy.py"; 


// exec($command,$output);
$left_player = [2, 2, 2, 2, 3, 3, 3, 5, 6, 6];
$right_player = [3, 4, 5, 6, 4, 5, 6, 4, 4, 5];

$data = array();


try {
    $dbh = new PDO($dsn, $user, $password);

    // 最新の2550個のレコードを取得
    // for($i = 0; $i < count($left_player); $i++){
    // $sql = "SELECT * FROM `lr.coef_` WHERE `type` = 0 AND `left_player` = $left_player[$i] AND `right_player` = $right_player[$i]";
    $sql = "SELECT * FROM `lr.coef_` WHERE `type` = 0 AND `left_player` = 2 AND `right_player` = 3";

    $stmt = $dbh->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetchAll();
    // array_push($data, $result);
    // }

} catch (Exception$e) {
    echo$e->getMessage();
    exit();
}
// $array = [$result, $output];
header('Content-type: application/json');
echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>