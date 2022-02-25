	 <!DOCTYPE html>

	<html>
	
		<head>
		
			<title>Scrabble</title>
			
			<link rel="stylesheet" href="../styles/index.css">
			
			<link rel="stylesheet" href="../styles/templates.css">
			
		</head>
		
		<body>
		
		<div class="sideNav"></div>
		
		<button class="header"></button>
		
		<br><br><br><br>
		
		
	 <form class="form">
	 
	 <label class="formHeading">Log in</label>
	 
	 <br><br>
	
	 <input id="loginUsername" placeholder="Enter Username">
	
	 <br><br>
	
	 <input type="password" id="loginPassword" placeholder="Enter Password">
	 
	 <br><br>
	
	 <button id="loginButton" type="button">Log in</button>
	 
	 <br><br>
	
	 <label class="formHeading">Don't have an account?</label>
	 
	 <br><br>
	
	<button id="toSignup" class="otherButton" type="button">Sign up</button>
	 
	 </form>
	 
	 <script src="../scripts/JQuery.js"></script>
	 
	 <script src="../accounts/index.js"></script>
	
	 <script src="../scripts/templates.js"></script>
	 
	 <script src="../scripts/accountscontroller.js"></script>
	 
	 <script src="../scripts/methods.js"></script>
	 
	 <script>
	 
	 	$("#toSignup").click(function() {
	 	
	 		var returnPage = '<?php 
	 		
	 			if(!empty($_GET["return"])) {
	 
	 				echo $_GET["return"];
	 				
	 			} 
	 			
	 			else {
	 			
	 				echo "";
	 			
	 			}
	 				
	 			?>';
	 		
	 		window.location.href = "../signup?return=" + returnPage;
	 		
	 	});
	 
	 </script>
	
	 </body>
	 
 </html>
 
	 <?php
	 
	 if(!empty($_GET["return"])) {
	 
		 echo '<script>
		 
		 	function returnToPreviousPage() {
	 
	 		window.location = "' . $_GET["return"] . '";
	 
			 }
	 
		 </script>';
		 
	} else {
	
		 echo '<script>
		 
		 	function returnToPreviousPage() {
	 
	 		window.location = "../";
	 
			 }
	 
		 </script>';
	
	}
	
	?>