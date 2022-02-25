<?php

	$file = "../../session/" . $_POST['gameFolder'] . "/holdOnHolder.txt";
	
	file_put_contents($file, $_POST['name']);
	
	exit();
	
 ?>	