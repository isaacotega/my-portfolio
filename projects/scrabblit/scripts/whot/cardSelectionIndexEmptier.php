<?php

	$cardSelectionIndexFile = "../../session/" . $_POST['gameFolder'] . "/cardSelectionIndex.txt";
	
	file_put_contents($cardSelectionIndexFile, "0");
	
	exit();
	
 ?>	