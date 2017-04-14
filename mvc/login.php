<?php
	session_start();
?>
<?php 
    include('connect.php');
	try {
		$dbh=new PDO('mysql:dbname='.$db.';host:'.$host,$user,$pw);
		$stm= $dbh->prepare('SELECT * FROM '.$db.'.utente WHERE email=:mail AND password= md5(:pw)');
		$stm->bindValue(':pw',$_POST['Password']);
		$stm->bindValue(':mail',$_POST['Mail']);
		if($stm->execute()) {
		    $sqlrows=$stm->rowCount();
		    if($sqlrows==1) {
		        $row=$stm->fetch(PDO::FETCH_ASSOC);
		        $_SESSION['idlog']=$row['idutente'];
		        print  $_SESSION['idlog'];
		    }
		}
		else {
			 print 0;
		}
		
	}
	catch(PDOException $e) {
			echo 'Errore '.$e->getMessage();
	}
?>