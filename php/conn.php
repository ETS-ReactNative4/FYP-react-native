<?php
$hostname = "http://127.0.0.1/";
$username = "root";
$pwd = "";
$db = "fyp_website";
$conn = mysqli_connect($hostname, $username, $pwd, $db)
	or die(mysqli_connect_error());
define('PRODUCT_IMG_URL', 'images/');

try {
	$db_PDO = new PDO('mysql:dbname=fyp_website;host=localhost:3307', 'root', '');
	$db_PDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
	echo "PDO error" . $e->getMessage();
	die();
}
