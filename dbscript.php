<?php


/*
echo $_GET["Grund"];
echo $_GET["Beschreibung"];
echo $_GET["Datum"];
echo $_GET["Preis"];
*/

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

$sql = "SELECT * FROM document";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["PaymentID"]. " - Reason: " . $row["Reason"]. " - Description " . $row["Description"]. " - Date " . $row["Date"]." - Amount " . $row["Amount"]. "\n" .  "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();

?>
