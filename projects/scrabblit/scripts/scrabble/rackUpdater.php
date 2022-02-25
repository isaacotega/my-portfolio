<?php
	
	$rackFile = "../../session/" . $_POST['gameFolder'] . "/racks/" . $_POST['username'] . ".html";
	
	file_put_contents($rackFile, $_POST["rack"]);
	
	exit();
	
 ?>