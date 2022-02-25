<?php

	$file = "../../session/" . $_POST['gameFolder'] . "/threePicker.txt";
	
	file_put_contents($file, $_POST['name']);
	
	exit();
	
 ?>	