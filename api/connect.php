<?php
$mysqli = new mysqli("localhost","raam","raam","tn360");

// Check connection
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}
?>