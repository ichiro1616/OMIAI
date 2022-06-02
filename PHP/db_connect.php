<!-- パスワードは上村のMySQLで使っているものです -->
<!-- このコードはDBとの接続のみ -->

<?php
$dsn = 'mysql:dbname=omiai_db;host=localhost';
$user = 'root';
$password = 'Pa22wadoh';

try{
    $dbh = new PDO($dsn, $user, $password);
    print('接続に成功しました。<br>');
}
catch(PDOException $e){
    print('Error:' .$e->getMessage());
    die();
}
$dbh = null;
?>