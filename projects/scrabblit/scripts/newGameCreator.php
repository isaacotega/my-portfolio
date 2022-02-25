<?php

					echo '<!DOCTYPE html>

	<html>
	
		<head>
		
			<title>Scrabble</title>
			
			<link rel="stylesheet" href="../styles/templates.css">
			
			<link rel="stylesheet" href="../styles/index.css"> 
			
		</head> 
		
		<body> 
		
			<div class="sideNav"></div>
		
			<button class="header"></button>
			
			<div class="fullLoader"></div>
		
				<script src="JQuery.js"></script>
		 
		 		<script src="methods.js"></script>
		 		
				<script src="templates.js"></script>
		 
		 		</body>
		 	
	 </html>';
	 
					
				if($_POST["gameExist"] == "yes") {
				
					echo '<script>
		
							toast("The game session you are trying to create already exists");
								
	      	setTimeout(function() {
	      	
	      		history.back();
	      		
	      	}, 2000);
					
					</script>

					';
				
				} 
				
				else {
				
	//create session
		
	$dir = "../session/" . $_POST["newGameId"];
	
	mkdir($dir);
	
	// useful variables and files
	
	$passwordFile = $dir . "/pswd.txt";
	
	$statusFile = $dir . "/status.txt";
	
	$gameBoardFile =  $dir . "/gameBoard.html";
	
	$gameNameFile =  $dir . "/game.txt";
	
	$game = $_POST["game"];
	
	// setting status file content as pending and game file as the game name
	
	file_put_contents($statusFile, "pending");
	
	file_put_contents($gameNameFile, $game);
	
	// saving password 
	
	file_put_contents($passwordFile, $_POST["newGamePassword"]);
	
			//add name to participants 
			
				$participantsFile  = $dir . "/participants.html";
				
				$fh = fopen($participantsFile, 'a') or die("Error");
				
				fwrite($fh, '
				
					<button class="option">
		
						<label id="participantName" class="optionText">' . $_POST["username"] . '</label>
	
						</button>' );
				
				fclose($fh);
		
	// save gameboard according to game POST data
	
	if($game == "Scrabble") {
	
	// Create racks folder
	
	mkdir("../session/" . $_POST["newGameId"] . "/racks");
	          
	// Create backupRacks folder
	
	mkdir("../session/" . $_POST["newGameId"] . "/backupRacks");
	          
	// Create contestants folder
	
	mkdir("../session/" . $_POST["newGameId"] . "/contestants");
	          
	$contestantsFile = "../session/" . $_POST["newGameId"] . "/contestants/" . $_POST["userVariable"] . ".txt";
	
	// make his contestant file
	
	file_put_contents($contestantsFile, "false");
	
	$hostResultFile = $dir . "/hostResult.txt";
	
	// define the contents of the gameboard
	
		$gameBoard = file_get_contents("../templates/scrabbleBoard.html");
		
	}
	
	
	
	
	else if($game == "Whot") {
	    
		// Create cards folder
	
		mkdir("../session/" . $_POST["newGameId"] . "/cards");
	          
		// Create playerStatus folder
	
		mkdir("../session/" . $_POST["newGameId"] . "/playerStatus");
		
		// create cardSelectionArray File
	          
		$cardSelectionArrayFile = "../session/" . $_POST["newGameId"] . "/cardSelectionArray.js";
		
		// create card Selection index File
	          
		$cardSelectionIndexFile = "../session/" . $_POST["newGameId"] . "/cardSelectionIndex.txt";
		
		// create cards file
		
		$cardsFile = "../session/" . $_POST["newGameId"] . "/cards/" . $_POST["userVariable"] . ".txt";
	
		// create card stack file
		
		$cardStackFile = "../session/" . $_POST["newGameId"] . "/cardStack.html";
	
		$gameBoard = 'whot'; 
	
		file_put_contents($cardSelectionArrayFile, $_POST["cardSelectionArray"]);
	
		file_put_contents($cardSelectionIndexFile, "0");
		
		file_put_contents($cardStackFile, '<button class="cards"> <label class="number">7</label> <br><br> <div class="smallShape"> <span class="smallCarpet">  </span> </div> <br> <div class="largeShape"> <span class="Carpet">  </span> </div>  <div class="smallShape2"> <span class="smallCarpet">  </span> </div> <br><br> <label class="number2">7</label> </button>');
	
	}
	
	else {}
	
	
	
	
	
// fixing gameboard into gameBoard file
				
	file_put_contents($gameBoardFile, $gameBoard);
	
	
	
	
// finishing touches 	
	
	echo '<script>
		
	//set session item in DOM
		
			sessionStorage.setItem("gameStatus","' . $_POST["newGameId"] . '");
			

	// redirects to dashboard
	
			window.location.href = "../join-game/?stage=dashboard";
			
		</script>
		
		';
		
		}
	
			
 ?>	