<html>
<head>
	<title>CONTACT</title>
    <meta charset="utf-8">   
    <title>PATEL ABHI</title>   
    <link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body id="contactbg">
<?php if(isset($_Get['status']) && $_GET['status'] ==='success'):
        header('/index.html');
?>
<?php endif;?>

<?php if(isset($_Get['status']) && $_GET['status'] ==='error'):?>
	<p>Form is missing required fields</p>
<?php endif;?>

    <form class="formBox" action="./admin/scripts/sendEmail.php" method="post">
        <h2>CONTACT ME</h2>
        <input type="text" name="" placeholder="fullname">
		<input type="email" name="email" placeholder="abc@abc.abc">
		<textarea name="message" placeholder="message..."></textarea>
		<button type="submit" name="submit">Submit</button>
	</form>

</body>
</html>