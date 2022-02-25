<?php
	
	$path = $_POST['path'];
	
	file_put_contents($path, "true");
	
	exit();
	
 ?>