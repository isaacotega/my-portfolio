<?php
	
	$path = $_POST['path'];
	
	file_put_contents($path, "false");
	
	exit();
	
 ?>