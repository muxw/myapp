<?php 
	session_start();
	$num = $_GET[a];
	
	if(isset($_SESSION['counter']))
	{
		$_SESSION['counter'] += 1;
	}else{
		$_SESSION['counter'] = 1;
	}
	unset($_SESSION['counter']);
   echo $msg = "You have visited this page ".  $_SESSION['counter']."in this session.";
   
 ?>
