<?php

	$currentPlayerFile = "../../session/" . $_POST['gameFolder'] . "/currentPlayerIndex.txt";
	
	file_put_contents($currentPlayerFile, $_POST["nextPlayer"]);
	
	exit();
	
 ?>	