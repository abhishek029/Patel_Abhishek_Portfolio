<?php

include 'functions.php';
//get all information for about page
    $about = get_about_data($conn);
    $work = get_all_work($conn);
    echo json_encode(array($about,$work));
?>