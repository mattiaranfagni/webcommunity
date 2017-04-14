<?php
    include('connect.php');
    $dbh=new PDO($dbname,$user,$pw);
    $stm= $dbh->prepare('SELECT * FROM dbprovamvc.evento');
    if($stm->execute()) {}
    $events=$stm ->fetchAll();
    //print_r($events);
    $objjson = json_encode($events);
    print($objjson);
?>