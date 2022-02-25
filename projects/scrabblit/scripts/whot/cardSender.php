<?php

	$file = "../../session/" . $_POST['gameFolder'] . "/cards/" . $_POST['name'] . ".html";
	
	$fh = fopen($file, 'a') or die("Error");
	
	fwrite($fh, $_POST['card']);
	
	fclose($file);
	
	exit();
	
 ?>	