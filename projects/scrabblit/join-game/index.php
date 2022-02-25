<!DOCTYPE html>

	<html>
	
		<head>
		
			<title>Scrabble</title>
			
			<link rel="stylesheet" href="../styles/index.css">
			
			<link rel="stylesheet" href="../styles/templates.css">
			
			<script>
		
			//ensuring user is logged in

				if(localStorage.getItem("accountInformation") == null || localStorage.getItem("accountInformation") == "") {

					window.location.href = "../login?return=" + window.location;
				
				}
			
				</script>
			
		</head>
		
		<div class="sideNav"></div>
		
		<button class="header"></button>
		
		<br><br><br><br>
		
	 		
		<body>
		
			<div id="body"></div>
		
	 <script src="../scripts/JQuery.js"></script>
	 
	 <script src="../scripts/templates.js"></script>
	 
	 <script src="../scripts/methods.js"></script>
		
		</body>
		
	</html>
			
	<?php
	
	//checks if GET data exists
	
		if(!empty($_GET["stage"])) {
		
		//if it does load according to data

			if($_GET["stage"] == "info") {
		
				echo '<script>$("#body").load("game-info.html")</script>';
		
			}
	
			else if($_GET["stage"] == "dashboard") {
		
			//ensuring game session is going on
			
			echo '
			
			<script>
			
			//if so redirect to the join a game page
			
					if(sessionStorage.getItem("gameStatus") == null) {

						window.location.href = "../join-game?stage=join&return=" + window.location;
				
					}
				
					else {
				
						$("#body").load("dashboard.html");
						
					}
					
				</script>';
		
			}
			
			else if($_GET["stage"] == "join") {
			
					if(!empty($_GET["return"])) {
					
						echo '<script>
						
								$("#body").load("join.html", function() {
					
									var welcomerBody = "lblWelcomerBody";
					
									$("#body").prepend("<label id=" + welcomerBody + ">You have to join a game to view the dashboard </label>");
									$("#joinGameForm").attr("action", "../scripts/joinGame.php?return=' . $_GET["return"] . '");
									
									
								});
							
							</script>';
					
					}
					
					else {
		
						echo '<script>
						
									$("#body").load("join.html", function() {
						
										$("#joinGameForm").attr("action", "../scripts/joinGame.php");
										
										});
									
								</script>';
					}
					
			}
			
			else if($_GET["stage"] == "new") {
		
				echo '<script>
				//localStorage.removeItem("accountInformation");
					$("#body").load("select-join-method.html", function() {
					
						var welcomerId = "lblWelcomer";
					
						var welcomerBody = "lblWelcomerBody";
					
						$("#body").prepend("<label id=" + welcomerId + "> Welcome to " + appName + ", " + localStorage.getItem("scrabblitUsername") + ".</label> <br><label id=" + welcomerBody + ">Click the Start Game button to start a new multi-player game or click the Join Game Button to join an existing game. </label>");
					
					});
				
				</script>';
		
			}
			
		//unspecified data
		
			else {
		
				echo '<script>$("#body").load("select-join-method.html")</script>';
		
			}
		
		}
		
		//empty data
		
		else {
		
			echo '<script>$("#body").load("select-join-method.html")</script>';
		
			}
	
	 ?>