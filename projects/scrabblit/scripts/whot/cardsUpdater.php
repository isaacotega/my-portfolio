<?php

	$file = "../../session/" . $_POST['gameFolder'] . "/cards/" . $_POST['username'] . ".html";
	
	file_put_contents($file, $_POST["cards"]);
	
	exit();
	
 ?>	