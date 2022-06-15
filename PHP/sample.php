<?php
//DBへの接続時に必要な情報
$dsn = 'myspl:dbname=omiai_db; host=localhost';
$user = 'root';
$password = 'Ps22wadoh';
$data = array();

//dbとの接続試行・データ送信
try{
    $dbh = new PDO($dsn, $user, $password);
    $stmt = $dbh->query("INSERT INTO `register`(`x_coordinate`, `y_coordinate`) VALUES (register_x, register_y)");
    $_data = $stmt->fetchAll(PDO::FETCH_ASSOC);
}catch(PDOException $e){
    print('Error:' .$e->getMessage());
    die();
}

$dbh = null; //DBとの接続を解除
?>