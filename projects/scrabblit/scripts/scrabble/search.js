$("#searchIcon").click(function() {

	$("#searchBar").css({
		height: "80px"
	});
	
	$("#gameBoard").css({
		opacity: "0.2"
	});

	$("#secondHeader").css({
		display: "none"
	});

	$("#rack").css({
		opacity: "0.2"
	});

	$("#searchBar").css({
		opacity: "1"
	});

});

$("#closeSearch").click(function() {

	$("#searchBar").css({
		height: "0px"
	});
	
	$("#gameBoard").css({
		opacity: "1"
	});

	$("#secondHeader").css({
		display: "block"
	});

	$("#rack").css({
		opacity: "1"
	});

	$("#searchBar").css({
		opacity: "1"
	});

	$("#searchPort").css({
		height: "0%",
		width: "0%",
		borderRadius: "50%"
	});

	$("#searchPortHolder").css({
		textAlign: "center"
	});
	
	$("#inpSearch").val("");

});


$("#inpSearch").keyup(function() {

	$("#searchPort").css({
		height: "100%",
		width: "100%",
		borderRadius: "0%"
	});

	$("#searchPortHolder").css({
		textAlign: "left"
	});

	$("#searchPort").attr("src", "http://google.com/search?q=" + $(this).val());
	
});