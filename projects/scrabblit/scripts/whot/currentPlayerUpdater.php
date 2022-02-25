<?php

	$currentPlayerFile = "../../session/" . $_POST['gameFolder'] . "/currentPlayerIndex.txt";
	
	if(file_get_contents($currentPlayerFile) < $_POST['maxIndex']) {
	
		$nextPlayerIndex = file_get_contents($currentPlayerFile) + 1;
	
	}
	
	else {
	
		$nextPlayerIndex = 0;
	
	}
	
	file_put_contents($currentPlayerFile, $nextPlayerIndex);
	
	exit();
	
 ?>	