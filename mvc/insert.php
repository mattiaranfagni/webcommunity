<?php
    //include(connect.php);
    try {
    $dbh=new PDO('mysql:dbname=dbprovamvc;host:127.0.0.1','m1nus','');
    $stm= $dbh->prepare('INSERT INTO dbprovamvc.evento (DataEvento,Titolo,Nickname) VALUES(:data,:titolo,:nick)');
    $stm -> bindValue(':data', $_POST['DataEvento']);
    $stm -> bindValue(':titolo', $_POST['Titolo']);
    $stm -> bindValue(':nick', $_POST['Nickname']);
    
    
    if($stm->execute()) {}
    }
    catch(PDOException $e) {
        echo 'Errore '.$e->getMessage();
    }
?>