<?php

	$file = "../../session/" . $_POST['gameFolder'] . "/pickThreeStatus.txt";
	
	file_put_contents($file, "");
	
	exit();
	
 ?>	