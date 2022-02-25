<?php

	$cardSelectionIndexFile = "../../session/" . $_POST['gameFolder'] . "/cardSelectionIndex.txt";
	
	file_put_contents($cardSelectionIndexFile, file_get_contents($cardSelectionIndexFile) + 1);
	
	exit();
	
 ?>	