<?php
$player0_x = $_POST['player0_x'];
$player0_y = $_POST['player0_y'];
 
// DBへの接続時に必要な情報
$dsn = 'mysql:dbname=omiai_db; host=localhost';
$user = 'root';
$password = 'Pa22wadoh';

// dbとの接続試行・データ送信
try{
    $dbh = new PDO($dsn, $user, $password);
    $sql = "INSERT INTO `register`(`experience_years`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate`) VALUES (1, 1, 1, '$player0_x', '$player0_y')";
    $stmt = $dbh->query($sql);
}
catch(PDOException $e){
 
    print('Error:' .$e->getMessage());
 
    die();

}
// 
$dbh = null; //DBとの接続を解除
?>