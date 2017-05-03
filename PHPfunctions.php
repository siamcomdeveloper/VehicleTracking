<?php
require_once( $_SERVER['DOCUMENT_ROOT'] . '/wordpress/wp-load.php' );
require_once( $_SERVER['DOCUMENT_ROOT'] . '/wordpress/wp-includes/pluggable.php' );

function checkpass($pass){
	//echo $pass;
	global $current_user;
    get_currentuserinfo();

	$user = get_user_by( 'login', $current_user->user_login );
	if ( $user && wp_check_password( $pass, $user->data->user_pass, $user->ID) )
		echo "true";
	else
		echo "false";
}

if (isset($_POST['pass'])) {
	echo checkpass($_POST['pass']);
	//echo $_POST['pass'];
}

if (isset($_GET['language'])){
	echo $_COOKIE['language'];
	if($_GET['language'] == "thai"){
		$cookie_name = "language";
		$cookie_value = "thai";
		setcookie($cookie_name, $cookie_value, time() + (86400 * 30 * 30), "/"); // 86400 = 1 day
	}
	else if($_GET['language'] == "eng"){
		$cookie_name = "language";
		$cookie_value = "eng";
		setcookie($cookie_name, $cookie_value, time() + (86400 * 30 * 30), "/"); // 86400 = 1 day
	}
	header('Location: http://siamcomdeveloper.tk/wordpress');
}
?>