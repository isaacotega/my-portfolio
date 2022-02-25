$(document).ready(function() {

	var navIsOut = false;

	$("#navIcon").click(function() {

		if(navIsOut == false) {

			$(this).css("color", "orange");

			$("#sideNav").css("width", "12cm");
		
			navIsOut = true;

		}

		else {

			$(this).css("color", "black");

			$("#sideNav").css("width", "0%");

			navIsOut = false;

		}
	
	});

});