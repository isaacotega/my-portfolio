<?php

	$file = "../../session/" . $_POST['gameFolder'] . "/command.txt";
	
	file_put_contents($file, $_POST['number']);
	
	exit();
	
 ?>	