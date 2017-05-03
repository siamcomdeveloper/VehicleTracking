<?php
$mysqli= mysqli_connect("localhost", "groupmaker_siam", "admin", "groupmaker_gps");

mysqli_set_charset($mysqli, "utf8");

$venderID = 999;
$vehicleID = $_GET['vehicle_id'];
$vehicleType = $_GET['vehicle_type'];
$provinceCode = $_GET['province_code'];
$vehicleRegisterType = $_GET['vehicle_register_type'];
$unitID = $_GET['unit_id'];
$vehicleChassisNo = $_GET['vehicle_chassis_no'];
$unitSIM = $_GET['unit_sim'];
$Capacity = $_GET['capacity'];
$driverID = $_GET['driver_id'];
$CardReader = $_GET['cardreader'];
$Active = $_GET['active'];
$action = $_GET['action'];
$dateTime = date_create('now')->format('Y-m-d H:i:s');

if( ($vehicleID!=null)&&(!strcmp($action,"insert")) ){
	$strSQL = "INSERT INTO master_file (vender_id, unit_id, vehicle_id, vehicle_type, vehicle_chassis_no, vehicle_register_type, update_time, card_reader, province_code, driver_id, unit_sim, capacity, active) VALUES ($venderID, '$unitID', '$vehicleID', '$vehicleType', '$vehicleChassisNo', $vehicleRegisterType, '$dateTime', $CardReader, '$provinceCode', '$driverID', '$unitSIM', $Capacity, $Active)";
}
else if( ($vehicleID!=null)&&(!strcmp($action,"update")) ){
	$strSQL = "UPDATE master_file SET unit_id='$unitID', vehicle_type='$vehicleType', vehicle_chassis_no='$vehicleChassisNo', vehicle_register_type=$vehicleRegisterType, update_time='$dateTime', card_reader=$CardReader, province_code='$provinceCode', driver_id='$driverID', unit_sim='$unitSIM', capacity=$Capacity, active=$Active WHERE vehicle_id='$vehicleID';";
}
else if( ($vehicleID!=null)&&(!strcmp($action,"delete")) ){
	$strSQL = "DELETE FROM master_file WHERE vehicle_id='$vehicleID';";
}
else{
	$strSQL = "SELECT * FROM master_file";
}

$result = mysqli_query($mysqli, $strSQL);

$resultArray = array();

$arrCol["SQL"] = $strSQL;
array_push($resultArray,$arrCol);
$arrCol["error"] = mysqli_error($mysqli);
array_push($resultArray,$arrCol);

mysqli_close($mysqli);

echo json_encode($resultArray);
?>