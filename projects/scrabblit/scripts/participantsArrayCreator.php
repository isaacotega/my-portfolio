<?php

	$participantsArray = "../session/".  $_POST["gameFolder"] . "/participantsArray.js";
	
	$currentPlayerFile = "../session/".  $_POST["gameFolder"] . "/currentPlayerIndex.txt";
	
	file_put_contents($participantsArray, "var participantsArray = [" . $_POST["participants"] . "];"); 
	
	file_put_contents($currentPlayerFile, "0"); 
	
	
 ?>