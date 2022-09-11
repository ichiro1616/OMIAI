<?php
include 'db_config.php';
$data = array();

try{
    $dbh = new PDO($dsn,$user,$password);
    $stmt = $dbh->query("SELECT `collective_id`, `generation`, `rotation`, `experience_years`, `player_id`, `x_coordinate`, `y_coordinate` FROM `collective` ");
    $_data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach($_data as $d){
        $tmp = array(
            "collective_id" => $d['collective_id'],
            "generation" => $d['generation'],
            "rotation" => $d['rotation'],
            "experience_years" => $d['experience_years'],
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

$dbh = null;
header('Content-type: application/json');
echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>