<?php

	$file = "../../session/" . $_POST['gameFolder'] . "/whotCommand.txt";
	
	file_put_contents($file, $_POST['name']);
	
	exit();
	
 ?>	