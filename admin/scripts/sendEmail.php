<?php
 include ("/includes/connect.php");
	function send_email(){
		if(empty($_POST['email'])){
			header('Location:/contact.php?status=error');
			exit();
		}

		if(!isset($_POST['message']) || !isset($_POST['email'])){
			header('Location:/contact.php?status=error');
			exit();
		}
		
		$name = $_POST['name'];
		$to = 'patelabhi585@gmail.com';
		$subject = "Portfolio: ".$_POST['name'];
		$message = 'Message Body:'.$_POST['message'];
		$headers = "From: noreply@ABHIPATEL.ca\r\n";
		$headers .= 'Reply-To:'.$_POST['email'];
		
        
		if(mail($to, $subject, $message, $headers)){
			header('Location:/index.html');
		}
	}
	
	send_email();

	
?>