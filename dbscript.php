<?php

$servername = "localhost";
$username = "nas1";
$password = "nas1";
$dbname = "TEST";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn -> connect_error) {
 die( "Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";


?>
