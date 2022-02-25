<?php

	$contestantFile = "../../session/" . $_POST['gameFolder'] . "/contestant.txt";
	
	file_put_contents($contestantFile, $_POST["contestantName"]);
	
	exit();
	
 ?>	