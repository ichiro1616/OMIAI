<?php
include 'db_config.php';
try{
    $dbh = new PDO($dsn,$user,$password);
    $stmt1 = $dbh->query("SELECT MAX(`answer_id`) FROM `answer`");
    $data1 = $stmt1->fetchAll();
    $stmt2 = $dbh->query("SELECT MAX(`register_id`) FROM `register`");
    $data2 = $stmt2->fetchAll();
    $stmt3 = $dbh->query("SELECT MAX(`generation`)  FROM `collective`");
    $data3 = $stmt3->fetchAll();
    $result = [$data1[0][0],$data2[0][0]/6,$data3[0][0]];
}catch(PDOException $e){
    print('Error:' .$e->getMessage());
    die();
}
//DBとの接続を解除
$dbh = null;
header('Content-type: application/json');
echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>