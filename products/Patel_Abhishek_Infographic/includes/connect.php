<?php
    $user = "root";
    $password = "";
    $host = "localhost";
    $db = "db_infographic";

    $conn = mysqli_connect($host, $user, $password, $db);
    mysqli_set_charset($conn, 'utf8');
    if(!$conn){
        echo "connection didn't work";
        exit;
    } 




    $myQuery = "SELECT * FROM tbl_promotext WHERE promo_title = 'Promo Text'";
    
        $result = mysqli_query($conn, $myQuery);
 
        $rows = array();

        while($row = mysqli_fetch_assoc($result)){
            $rows[] = $row;
        }
        echo json_encode($rows);
        
?>