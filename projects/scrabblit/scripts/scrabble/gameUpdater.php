<?php

	$gameBoardFile = "../../session/" . $_POST['gameFolder'] . "/gameBoard.html";
	
	file_put_contents($gameBoardFile, $_POST["gameBoard"]);
	
	exit();
	
 ?>	