<?php 
    
	try {
		include('connect.php');
		//$dbh=new PDO('mysql:dbname=dbprovamvc;host:127.0.0.1','m1nus','');
		$dbh=new PDO('mysql:dbname='.$db.';host:'.$host,$user,$pw);
		$stm= $dbh->prepare('INSERT INTO '.$db.'.utente (nickname,nome,cognome,password,email) VALUES(:user,:name,:sur,md5(:pw),:mail)');
		$stm->bindValue(':user',$_POST['Username']);
		$stm->bindValue(':name',$_POST['Name']);
		$stm->bindValue(':sur',$_POST['Surname']);
		$stm->bindValue(':pw',$_POST['Password']);
		$stm->bindValue(':mail',$_POST['Mail']);
		if($stm->execute()) {
			print 'successful';
		}
		else {
			print 'unsuccessful';
		}
		
	}
	catch(PDOException $e) {
		echo 'Errore '.$e->getMessage();
	}
?>