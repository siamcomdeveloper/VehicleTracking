<?php
$mysqli= mysqli_connect("localhost", "groupmaker_siam", "admin", "groupmaker_gps");

mysqli_set_charset($mysqli, "utf8");

$dataID = $_GET['dataID'];
$driverID = $_GET['driver_id'];
$driverName = $_GET['driver_name'];
$driverSurname = $_GET['driver_surname'];
$licenceExpiry = $_GET['licence_expiry'];
$driverAddress = $_GET['driver_address'];
$mobileNo = $_GET['mobile_no'];
$companyName = $_GET['company_name'];
$Active = $_GET['active'];
$action = $_GET['action'];

if( ($driverID!=null)&&(!strcmp($action,"insert")) ){
	$strSQL = "INSERT INTO driver_info (data_id, driver_id, org, driver_name, driver_surname, driver_address, mobile_no, licence_expiry, active) VALUES (0, '$driverID', '$companyName', '$driverName', '$driverSurname', '$driverAddress', '$mobileNo', '$licenceExpiry', $Active)";
}
else if( ($dataID!=null)&&(!strcmp($action,"update")) ){
	$strSQL = "UPDATE driver_info SET driver_id='$driverID', org='$companyName', driver_name='$driverName', driver_surname='$driverSurname', driver_address='$driverAddress', mobile_no='$mobileNo', licence_expiry='$licenceExpiry', active=$Active WHERE data_id='$dataID';";
}
else if( ($dataID!=null)&&(!strcmp($action,"delete")) ){
	$strSQL = "DELETE FROM driver_info WHERE data_id='$dataID';";
}
else{
	$strSQL = "SELECT * FROM driver_info";
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