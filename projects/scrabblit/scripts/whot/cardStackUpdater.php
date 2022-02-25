<?php

	$file = "../../session/" . $_POST['gameFolder'] . "/cardStack.html";
	
	file_put_contents($file, $_POST['cardStack']);
	
	exit();
	
 ?>	