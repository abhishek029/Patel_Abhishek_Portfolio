<?php
    $user = "root";
    $pw = "";

    try {
        $conn = new PDO('mysql:host=localhost;dbname=db_portfolio', $user, $pw);
        
    } catch(PDOException $exception) {
        echo 'connect error!' . $exception->getMessage();
    }
?>