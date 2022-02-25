	<?php
	
		$accountFile = "../accounts/index.js";
		
		$fh = fopen($accountFile, 'a') or die('Error');
		
		fwrite($fh, 'accountsArray = accountsArray.concat("' . $_POST["username"]  . '");
passwordArray = passwordArray.concat("' . $_POST["password"]  . '");
dateArray = dateArray.concat("' . $_POST["date"]  . '");

');
		
		fclose($fh);
		
		echo '<script>
		
			window.location.href = "../join-game?stage=new"; 
		
		</script>';
		
		exit;
	
	 ?>