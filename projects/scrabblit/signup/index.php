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
		
	 
	 <form method="post" action="../scripts/registerer.php" id="signupForm" class="form">
	 
	 <label class="formHeading">Sign up</label>
	 
	 <br><br>
	
	 <input id="username" name="username" placeholder="Enter Username" required>
	 
	 <br><br>
	
	 <input type="password" id="password" name="password" placeholder="Enter Password" required>
	 
	 <br><br>
	
	 <input id="date" name="date" class="hidden">
	
	 <button type="submit">Sign up</button>
	 
	 <br><br>
	
	 <label class="formHeading">Already have an account?</label>
	 
	 <br><br>
	
	 <a href="../login"> <button class="otherButton" type="button">Login</button> </a>
	 
	 </form>
	 
	 <script src="../scripts/JQuery.js"></script>
	 
	 <script src="../accounts/index.js"></script>
	
	 <script src="../scripts/templates.js"></script>
	 
	 <script src="../scripts/accountscontroller.js"></script>
	 
	 <script src="../scripts/methods.js"></script>
	 
	 </body>
	 
 </html>