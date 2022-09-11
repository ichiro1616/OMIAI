<?php
include 'db_config.php';
$sprit_host = explode("=", $dsn)[2];
$host = explode("'", $sprit_host)[0];
$sprit_dbname = explode("=", $dsn)[1];
$dbname = explode(";", $sprit_dbname)[0];
$mysqli = new mysqli($host, $user, $password, $dbname);


if(!$mysqli){
    die("データベースの接続に失敗しました。");
}
$comand = "python ../Python/collective.py";
exec($comand)


mysqli_close($mysqli);