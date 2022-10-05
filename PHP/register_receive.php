<?php
include 'db_config.php';

$data = array();

//dbとの接続試行・データ取得
try{
    $dbh = new PDO($dsn, $user, $password);
    // print('接続に成功しました。<br>');
    $stmt = $dbh->query("SELECT `register_id`, `experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate` FROM `register`");
    $_data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach($_data as $d){
        $tmp = array(
            "register_id" => $d['register_id'],
            "experience_years" => $d['experience_years'],
            "Sub_Ob" => $d['Sub_Ob'],
            "rotation" => $d['rotation'],
            "player_id" => $d['player_id'],
            "x_coordinate" => $d['x_coordinate'],
            "y_coordinate" => $d['y_coordinate']
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