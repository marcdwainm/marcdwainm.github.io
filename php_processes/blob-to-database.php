<?php
include 'db_conn.php';

$base64 = $_POST['blob']; //base64 encoded
$doctype = $_POST['doctype'];
$pid = $_POST['pid'];

date_default_timezone_set('Asia/Manila');
$date = date('Ymdhis', time());

$query = "INSERT INTO documents (doc_num, doc_type, pdf_file, sent_to)
            VALUES ('$date', '$doctype', '$base64', '$pid')";

mysqli_query($conn, $query);
mysqli_close($conn);
