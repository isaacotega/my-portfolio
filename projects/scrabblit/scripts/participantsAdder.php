	<!DOCTYPE html>
	
		<head>
		
			<link rel="stylesheet" href="../styles/templates.css"> 
			
		</head> 
		
		<body> 
		
			<p id="hiddenParticipants" class="hidden"></p> 
			
		</body>
		
	</html>
			

<?php

	$dir = "../session/" . $_POST["gameId"];

	$participantsFile  = $dir . "/participants.html"; 
	
	$name = $_POST["name"];
	
	$userVariable = $_POST["userVariable"];
	
	$contestantsFile = "../session/" . $_POST["gameId"] . "/contestants/" . $userVariable . ".txt";
	
	// make his contestant file
	
	file_put_contents($contestantsFile, "false");
	
	// $participants = file_get_contents($participantsFile);
	
	$fh = fopen($participantsFile, 'a') or die("Error");
	
	 fwrite($fh, '
	 
	<button class="option">
	
		<label id="participantName" class="optionText">' . $name . '</label>
		
	</button>'); 
	 
	 fclose($fh);
	 
 ?>