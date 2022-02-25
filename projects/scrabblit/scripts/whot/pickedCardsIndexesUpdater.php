<?php

	$file = "../../session/" . $_POST['gameFolder'] . "/pickedCardsIndexes.txt";
	
	file_put_contents($file, file_get_contents($file) . $_POST['newIndex'] . ", " );
	
	exit();
	
 ?>	