<?php
$mysqli= mysqli_connect("localhost", "groupmaker_siam", "admin", "groupmaker_gps");

mysqli_set_charset($mysqli, "utf8");

$vehicleID = $_GET['vehicleID'];
$vehicleType = $_GET['vehicleType'];
$unitID = $_GET['unitID'];
$action = $_GET['action'];

if(!strcmp($action,"search")){
	$strSQL = "SELECT * FROM master_file WHERE vehicle_id LIKE '%".$vehicleID."%' AND vehicle_type LIKE '%".$vehicleType."%'";
}
else if( ($vehicleID!=null)&&(!strcmp($action,"view")) ){
	$strSQL = "SELECT * FROM master_file WHERE vehicle_id = '$vehicleID'";
}
else if( ($unitID!=null)&&(!strcmp($action,"view")) ){
	$strSQL = "SELECT * FROM master_file WHERE unit_id = '$unitID'";
}
else{
	$strSQL = "SELECT * FROM master_file";
}

$result = mysqli_query($mysqli, $strSQL);

if ($result) {
    echo "Success: A proper connection to MySQL was made! The my_db database is great." . PHP_EOL;
    echo "Host information: " . mysqli_get_host_info($mysqli) . PHP_EOL;
}
else{
    echo "Error: Unable to connect to MySQL." . PHP_EOL;
    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
    exit;
}

$intNumField = mysqli_num_fields($result);

$rowcount=mysqli_num_rows($result);

$resultArray = array();
$count = 0;

while($obResult = $result->fetch_array())
{	$count++;
	$arrCol = array();
	for($i=0;$i<$intNumField;$i++)
	{
		$arrCol[mysqli_field_name($result,$i)] = $obResult[$i];
		$arrCol["count"] = $count;
		$arrCol["vehicleID"] = $vehicleID;
		$arrCol["action"] = $action;
		$arrCol["sql"] = $strSQL;
		$arrCol["error"] = mysqli_error($mysqli);
	}
	
        array_push($resultArray,$arrCol);
}
	
mysqli_close($mysqli);

echo json_encode($resultArray);

function mysqli_field_name($result, $field_offset)
{
    $properties = mysqli_fetch_field_direct($result, $field_offset);
    return is_object($properties) ? $properties->name : null;
}

?>