<?php
$mysqli= mysqli_connect("localhost", "groupmaker_siam", "admin", "groupmaker_gps");

mysqli_set_charset($mysqli, "utf8");

$dataID = $_GET['dataID'];
$driverID = $_GET['driverID'];
$driverName = $_GET['driverName'];
$action = $_GET['action'];

$strDriverName = explode(" ", $driverName);
$strName = $strDriverName[0];
$strSurname = $strDriverName[1];

if(!strcmp($action,"search")){
	if($strSurname!=null){
		$strSQL = "SELECT * FROM driver_info WHERE driver_id LIKE '%".$driverID."%' AND driver_name LIKE '%".$strName."%' AND driver_surname LIKE '%".$strSurname."%'";
	}
	else if($strSurname==null){
		$strSQL = "SELECT * FROM driver_info WHERE driver_id LIKE '%".$driverID."%' AND (driver_name LIKE '%".$strName."%' OR driver_surname LIKE '%".$strName."%')";
	}
}
else if( ($dataID!=null)&&(!strcmp($action,'viewByDataID')) ){
	$strSQL = "SELECT * FROM driver_info WHERE data_id = '$dataID'";
}
else if( ($driverID!=null)&&(!strcmp($action,'viewByDriverID')) ){
	$strSQL = "SELECT * FROM driver_info WHERE driver_id = '$driverID'";
}
else{
	$strSQL = "SELECT * FROM driver_info";
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
		$arrCol["sql"] = $strSQL;
		$arrCol["error"] = mysqli_error($mysqli);
		$arrCol["dataID"] = $dataID;
		$arrCol["action"] = $action;
		$arrCol["driverID"] = $driverID;
		$arrCol["strName"] = $strName;
		$arrCol["strSurname"] = $strSurname;
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