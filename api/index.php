<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");


include_once "connect.php";

 


$sql = "SELECT head,url,content FROM content_list";

if ($result = $mysqli -> query($sql)) {
while($row=mysqli_fetch_assoc($result))
{
$json[]=$row;
}
 
}

$mysqli -> close();

#echo "<pre>";
#print_r($json);
#echo "<br>";

echo json_encode($json);


 


?>