<?php

	$file = "../../session/" . $_POST['gameFolder'] . "/pickThreeStatus.txt";
	
	if(!empty(file_get_contents($file))) {
	
		file_put_contents($file, file_get_contents($file) - 1);
		
	}
	
	else {
	
		file_put_contents($file, "5");
	
	}
	
	exit();
	
 ?>	