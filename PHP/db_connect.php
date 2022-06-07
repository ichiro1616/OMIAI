<?php
include ('/JavaScript/movie_script.js');

//DBへの接続時に必要な情報
$dsn = 'mysql:dbname=omiai_db;host=localhost';
$user = 'root';
$password = 'Pa22wadoh';

//DBとの接続試行
try{
    $dbh = new PDO($dsn, $user, $password);
    print('接続に成功しました。<br>');
}
catch(PDOException $e){
    print('Error:' .$e->getMessage());
    die();
}

// //HTMLから値を取得
// if (isset($_POST['add'])) {
//     $answer = "登録しました";


// }










$dbh = null; //DBとの接続を解除
?>