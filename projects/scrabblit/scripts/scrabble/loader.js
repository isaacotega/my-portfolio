//refreshing of game board

$("#refresh").click(function() {

	$(this).html('<div class="headIcon" id="refreshingIcon"></div>');
	
	$("#gameBoard").load("../session/" + sessionStorage.getItem("gameStatus") + "/gameBoard.html", function(responseTxt, statusTxt, xhr) {
	
		if(statusTxt == "success") {
		
			$("#refresh").html('<img src="../images/refresh.jpg" class="headIcon"></img>');
			
		}
		
	else {
		
			alert( "No game is in progress");
		
			$("#refresh").html('<img src="../images/refresh.jpg" class="headIcon"></img>');
			
		}
	
	});

});