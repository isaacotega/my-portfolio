<?php

	$statusFile = "../session/" . $_POST["gameFolder"] . "/status.txt";
	
	file_put_contents($statusFile, $_POST["status"]);
	
 ?>