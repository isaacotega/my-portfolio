<?php

	$gameId = $_POST["gameId"];
	
	$gamePassword = $_POST["gamePassword"];
	
	
	//define the next page method
	
	// if URL such as that of the dashboard exists in get data
	
	if(!empty($_GET["return"])) {

		$return = $_GET["return"];
	
		echo '
		
			<script>
			
		// returnToRightPage function takes you to it
			
				function returnToRightPage() {
				
					window.location = "' . $_GET["return"] . '";
					
				}
		
			</script>
		';
		
	}
	
	// but if there is none
	
	else {
	
		echo '
		
			<script>
			
		// returnToRightPage function takes you straight to game
			
				function returnToRightPage() {
				
					window.location.href = "../";
					
				}
		
			</script>
		';
	
	}
	
?>
	
	<!DOCTYPE html>
	
		<head>
		
			<link rel="stylesheet" href="../styles/index.css"> 
			
			<link rel="stylesheet" href="../styles/templates.css"> 
			
		</head> 
		
		<body> 
		
			<div class="sideNav"></div>
		
			<button class="header"></button>
			
			<div class="fullLoader"></div>
		
			<p id="hiddenPswd" class="hidden"></p> 
			
			<p id="hiddenParticipants" class="hidden"></p> 
			
			<p id="hiddenParticipantsArray" class="hidden"></p> 
			
		 <script src="JQuery.js"></script>
		 
		 <script src="methods.js"></script>
		 
		 <script src="templates.js"></script>
		 
	      <script>
	      
	    // call the function which will ensure game is not already in progress 
	      
validateStatus();
	      
function validateStatus() {
	      
	  //load participants array of the session the user wish to enter
	  
	  // presence of this for means game session has begun
	      
	    $("#hiddenParticipantsArray").load("../session/<?php echo $gameId ?>/participantsArray.js", function(responseTxt, statusTxt,  xhr) {
	    
	   // if not found
	    
	   if(xhr.status == 404) {
	   
	   // call the function which will validate password 
	   
	   	validatePassword();
	   	
	  }
	  
	  // if found
	  
	  else if(xhr.status == 200) {
	  
	  	// still check if he is among participants because user might have left game by accident and is finding his way back

	  //load participants of the session the user wish to enter
	      
	    $("#hiddenParticipants").load("../session/<?php echo $gameId ?>/participants.html", function() {
	    
	   // if his name is not among participants 
	      
	  	 if( $("#hiddenParticipants").html().indexOf(localStorage.getItem("scrabblitUsername")) == -1) {
	 
				toast("The game session you are trying to join is already in progress");
		
			// take him back
			
		 	   	setTimeout(function() {
	
					history.back();
			
				 }, 1000);
	      
			}
			
	   // if his name is among participants 
	    
			else {
			
				validatePassword();
			
			}
			
			});
		
		}
		
		// not gotten for any other reason 
		
		else {
		
			toast("Error joining session");
			
			setTimeout(function() {
			
				toast("Reconnecting");
				
				// repeat process from beginning 
				
				validateStatus();
			
		 	}, 3000);
		 	
		}
	  
	   });
	   
}


function validatePassword() {
	     
	  //load password of the session the user wish to enter
	      
	    $("#hiddenPswd").load("../session/<?php echo $gameId ?>/pswd.txt", function() {
	    
		   //if it corresponds with password user provided
	      
	   	   if($("#hiddenPswd").html() == '<?php echo $gamePassword ?>') {
	      
			   // set game id in DOM 
	   
			    sessionStorage.setItem("gameStatus", '<?php echo $gameId ?>');
	   
				// validate membership
				
				validateMembership();
				
			}	    
			
		     // else if password do not match that of the game
	      
		      else {
	      
	  		    	toast("The information you provided does not match any game session");
	      	
	   		   	// return back to join page
	      	
	     	 	setTimeout(function() {
	      	
		      		history.back();
	      		
	    		  	}, 1000);
	    
	      	}
	      	
	});
	      
}	      
	      
	    // function which will ensure his name does not get added to participants if he is already in 
	      
function validateMembership() {
	      
	  //load participants of the session the user wish to enter
	      
	    $("#hiddenParticipants").load("../session/<?php echo $gameId ?>/participants.html", function() {
	    
	   // if his name is not among participants 
	    
	   if( $("#hiddenParticipants").html().indexOf(localStorage.getItem("scrabblitUsername")) == -1) {
	   
	  
	          //add name to participants via AJAX
	          
			$.ajax({
				type: "POST",
				url: "participantsAdder.php",
				data: {
					gameId: "<?php echo $gameId ?>",
					name:  localStorage.getItem("scrabblitUsername"),
					userVariable: localStorage.getItem("accountInformation")
				},
				cache: false,
			});
	
	  					
	  }
	  
	  });
	  
	  // either way return to game
	  
		 	   	setTimeout(function() {
	
			 	     returnToRightPage();	      	
	      
				 }, 1000);
	  
	   
	   
}


	      
	      </script>
	
		</body>
	
	</html>
	