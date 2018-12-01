<?php
include 'connect.php';

function get_all_work($pdo) {
    $query = "SELECT * FROM tbl_work";

    $get_movie = $pdo->query($query);
    $results = array();

    while($row = $get_movie->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }
    return $results;
}

function get_about_data($pdo) {
    $query = "SELECT * FROM tbl_about";

    $get_movie = $pdo->query($query);
    $results = array();

    while($row = $get_movie->fetch(PDO::FETCH_ASSOC)) {
        $results[] = $row;
    }
    return $results;
}

?>