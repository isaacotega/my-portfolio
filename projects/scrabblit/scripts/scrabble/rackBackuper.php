<?php
	
	$rackFile = "../../session/" . $_POST['gameFolder'] . "/backupRacks/" . $_POST['username'] . ".html";
	
	file_put_contents($rackFile, $_POST["rack"]);
	
	exit();
	
 ?>