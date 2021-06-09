<?php

$q = $_REQUEST["q"];




/*$hochk = "'";
$grund = 	$hochk .   $_GET["Grund"]        . $hochk;
$beschreibung = $hochk .   $_GET["Beschreibung"] . $hochk;
$datum =        $hochk .   $_GET["Datum"]        . $hochk;
$preis =        $hochk .   $_GET["Preis"]        . $hochk;




echo $hochk;
echo $_GET["Grund"] . "<br>";
echo $_GET["Beschreibung"] . "<br>";
echo $_GET["Datum"] . "<br>" ;
echo $_GET["Preis"] . "<br>" ;


echo $grund . "<br>";
echo $beschreibung . "<br>";
echo $datum . "<br>";
echo $preis . "<br>";
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

//echo "Connected successfully";
/*
$insert = "INSERT INTO document (Reason,Description,Date,Amount) VALUES (" .$grund . "," . $beschreibung . "," . $datum . "," . $preis  .   ")";
echo $insert;


if ($conn->query($insert) === TRUE){
  echo "<br> New recort created successfully <br><br>";
}else{
  echo "<br> Error: " . $insert . "<br>" . $conn->error . "<br> <br>";
}

*/


$sql = "SELECT Amount FROM document";
$result = $conn->query($sql);
//echo $result;
$summe = 0;

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
  // echo "<br> Ausgabe" . $row["Amount"] ;
   $summe = $summe + $row["Amount"];
  }
} else {
 // echo "0 results";
}
$conn->close();

//echo "<br> Summe: " . $summe;
echo $summe;

?>
