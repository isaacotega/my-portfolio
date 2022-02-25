<?php

	$file = "../../session/" . $_POST['gameFolder'] . "/playerStatus/" . $_POST['name'] . ".txt";
	
	file_put_contents($file, $_POST['status']);
	
	exit();
	
 ?>	