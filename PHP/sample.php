<?php
$experience_years = $_POST['experience_years'];
$Sub_Ob = $_POST['subject_object_level'];
$rotation_counter = $_POST['rotation_counter'];
$player_number = $_POST['player_number'];
$player0_x = $_POST['player0_x'];
$player0_y = $_POST['player0_y'];

// $experience_years = 0;
// $Sub_Ob = 0;
// $rotation_counter = 3;
// $player_number = 4;
// $player0_x = 5;
// $player0_y = 20;

 
// DBへの接続時に必要な情報
$dsn = 'mysql:dbname=omiai_db;host=localhost';
$user = 'root';
$password = 'naramie';

// dbとの接続試行・データ送信
try{
    $dbh = new PDO($dsn, $user, $password);
    $sql = "INSERT INTO `register`(`experience_years`, `Sub_Ob`, `rotation`, `player_id`, `x_coordinate`, `y_coordinate`) VALUES ({$experience_years},{$Sub_Ob}, {$rotation_counter}, {$player_number}, {$player0_x}, {$player0_y})";
    $stmt = $dbh->query($sql);
    // $stmt = $dbh->query("INSERT INTO `register`(`experience_years`, 'Sub_Ob', `rotation`, `player_id`, `x_coordinate`, `y_coordinate`) VALUES (1,4, {$rotation_counter}, {$player_number}, {$player0_x}, {$player0_y})");
}
catch(PDOException $e){
    print('Error:' .$e->getMessage());
    die();
}
// 
$dbh = null; //DBとの接続を解除
?>