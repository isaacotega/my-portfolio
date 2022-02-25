$(document).ready(function(){

//body's height

	$("body").height(window.innerHeight - 20);
	
//variables declaration

	var expression = "";
	
//number event listener

	$("[class=number]").click(function(){

		expression += $(this).html();

		$("#mainScreen").html(expression);

		$("#answerScreen").html(calculate());

	//return delete button's text to Del in case it was Clr
	
		$("#delete").html("Del");
		
	});

//operators event listener

	$("[class=sign]").click(function(){
	
	//ensure operator does not display if screen is empty and expression does not begin with a minus
	
		if($("#mainScreen").html() !== "" &&  $("#mainScreen").html() !== "-") {
	
	//overwrite previous operator if another is presently the last character

			var x  = $("#mainScreen").html().length;
		
			if($("#mainScreen").html().charAt(x - 1) == "+" || $("#mainScreen").html().charAt(x - 1) == "-" || $("#mainScreen").html().charAt(x - 1) == "*" || $("#mainScreen").html().charAt(x - 1) == "/") {
		
				expression  = expression.substr(0, x - 1).concat($(this).html());

				$("#mainScreen").html(expression);

			}
			
	//carry on with operation if number is presently the last character

			else {

				expression += $(this).html();

				$("#mainScreen").html(expression);

			}
		}
		
	//ensure only minus can begin an expression
	
	else {
	
		if($(this).html() == "-") {
		
				expression += $(this).html();

				$("#mainScreen").html(expression);
		
			}
	
		}
		
	//return delete button's text to Del in case it was Clr
	
		$("#delete").html("Del");
		
	});

//equal to button event listener

	$("#equalTo").click(function(){
	
		expression  = $("#answerScreen").html();

		$("#mainScreen").html(expression);
	
		$("#answerScreen").html("");
		
		if($("#mainScreen").html() !== "") {
		
			$("#delete").html("Clr");
		
		}

	});

//delete button event listener

	$("#delete").click(function(){
	
		if($(this).html() == "Del") {

		var x  = expression.length;

		expression  = expression.substr(0, x - 1);

		$("#mainScreen").html(expression);

		$("#answerScreen").html(calculate());
		
		}
		
		else {
		
		expression  = "";

		$("#mainScreen").html(expression);

		$("#answerScreen").html("");
		
		$(this) .html("Del");
		
		}

	});
	
//calculate method

	function calculate() {
	
		if(expression.length !== 0) {

			 if(expression.charAt(expression.length - 1, 1) == "+" || expression.substr(expression.length - 1, 1) == "-" || expression.substr(expression.length - 1, 1) == "*" || expression.substr(expression.length - 1, 1) == "/") {
			 
				return eval(expression.substr(0, expression.length - 1));
			 
			 }
			 
			 else {
			 
				return eval(expression);
				 
			}
			 
		}
		
		else {
		
			return("");
		
		}

	}

});

//$("audio#spike")[0].play()