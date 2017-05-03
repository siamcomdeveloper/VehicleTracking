<?php
$mysqli= mysqli_connect("localhost", "groupmaker_siam", "admin", "groupmaker_gps");

mysqli_set_charset($mysqli, "utf8");

$unitID = $_GET['unitID'];
$start = $_GET['Start'];
$end = $_GET['End'];
$action = $_GET['action'];

if( ($unitID!=null)&&(!strcmp($action,'path')) ){
	$strSQL = "SELECT * FROM gps_data WHERE unit_id = '$unitID' AND utc_ts BETWEEN '$start' AND '$end'";
}
else if( ($unitID!=null)&&(!strcmp($action,'search')) ){
	$strSQL = "SELECT * FROM gps_data WHERE unit_id = '$unitID'";
}
else{
	$strSQL = "SELECT *,b.active AS vehicle_active FROM gps_data a, driver_info c, master_file b WHERE a.data_id in (SELECT MAX(a.data_id) FROM gps_data  a GROUP BY a.unit_id) and a.unit_id=b.unit_id and a.driver_id=c.driver_id ORDER by a.data_id";
}

$result = mysqli_query($mysqli, $strSQL);

echo mysqli_error($mysqli);

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
		if(i==0) $arrCol["realID"] = $obResult[$i];
		$arrCol[mysqli_field_name($result,$i)] = $obResult[$i];
		$arrCol["count"] = $count;
		$arrCol["total"] = $rowcount;
		$arrCol["unitID"] = $unitID;
		$arrCol["sql"] = $strSQL;
		$arrCol["error"] = mysqli_error($mysqli);
		$arrCol["action"] = $action;
		$arrCol["start"] = $start;
		$arrCol["end"] = $end;
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