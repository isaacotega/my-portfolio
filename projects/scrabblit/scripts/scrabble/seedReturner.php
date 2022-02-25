<?php

	$seedsFile = "../../session/" . $_POST['gameFolder'] . "/racks/" . $_POST['username'] . ".html";
	
	$backupSeedsFile = "../../session/" . $_POST['gameFolder'] . "/backupRacks/" . $_POST['username'] . ".html";
	
	file_put_contents($seedsFile, file_get_contents($backupSeedsFile));
	
	exit();
	
 ?>	