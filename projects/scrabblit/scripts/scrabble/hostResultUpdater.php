<?php

	$hostResultFile = "../../session/" . $_POST['gameFolder'] . "/hostResult.txt";
	
	file_put_contents($hostResultFile, $_POST["result"]);
	
	exit();
	
 ?>	