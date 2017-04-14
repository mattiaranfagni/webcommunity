<?php
    session_start();
    if(!isset($_SESSION['idlog']))  {
        print 'redirect';
    }
?>