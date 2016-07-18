<?php

require_once "connect.php";

$connection = @new mysqli($host,$db_user,$db_password,$db_name);
$connection -> set_charset("utf8");
if($connection->connect_errno){
    echo "Error: ".$connection->connect_errno."<br/>"."Desription: ".$connection->connect_error;
}

$quote = "Hello";
$author= "Kacper";

$sqlQuery = "SELECT * FROM `quotes` WHERE 1";

$numberOfQuotes =0;

if($resultOfQuery = @$connection->query($sqlQuery)){
  $numberOfQuotes = mysqli_num_rows($resultOfQuery);
  if($numberOfQuotes > 0){
    $id=rand(1,$numberOfQuotes-1);
    $sqlQuery = sprintf("SELECT quotes.quote, teachers.imie, teachers.nazwisko FROM quotes, teachers WHERE quotes.id=%s AND teachers.id = quotes.teacherid", $id);
    $resultOfQuery->free();
    if($resultOfQuery = $connection->query($sqlQuery)){
      $row = $resultOfQuery->fetch_assoc();
      $quote = $row ['quote'];
      $author= $numberOfQuotes." ".$row ['imie']." ".$row ['nazwisko'];
  }
}
}
$connection->close();
$data = array(
    'quote' => $quote,
    'author' =>$author
);
echo $_GET['callback'].'('.json_encode($data).')';
 ?>
