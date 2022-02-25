<?php

	$file = "../../session/" . $_POST['gameFolder'] . "/whotShape.txt";
	
	file_put_contents($file, $_POST['shape']);
	
	exit();
	
 ?>	