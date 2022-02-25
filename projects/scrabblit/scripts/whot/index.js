$(document).ready(function() {

// load three picker file at intervals 

setInterval(function() {

	$("#threePicker").load("../session/" + sessionStorage.getItem("gameStatus") + "/threePicker.txt", function() {
	
	if($("#threePicker").html() == localStorage.getItem("accountInformation")) {
	
		$("#pickThreeStatus").load("../session/" + sessionStorage.getItem("gameStatus") + "/pickThreeStatus.txt", function() {
	
			toast("Defend your pick three in " + $("#pickThreeStatus").html() + " seconds");
		
		});
	
	}
	
	});
	
}, 1000);
	
// load card selection index file at intervals 

setInterval(function() {

	$("#cardSelectionIndex").load("../session/" + sessionStorage.getItem("gameStatus") + "/cardSelectionIndex.txt", function() {
	
	// fix appropriate number of overturned cards depending on number of remaining cards to be played 
	
		if($("#market .cards").length !== 54 - Number($("#cardSelectionIndex").html())) {
		
			var x = 0;

			$("#market").html("");

			while(x < 54 - Number($("#cardSelectionIndex").html())) {
			
				$("#market").append('<button class="cards"> <label class="lblWhot">Whot</label> <br><br><br> <div class="lblWhot2">Whot</div> </button>');
	
				x++;
			
			}

		}
	
	});
	
}, 500);



// load card selection array 

	var cardSelectionArrayScript = '<script src="../session/' + sessionStorage.getItem("gameStatus") + '/cardSelectionArray.js"></script>';
	
	$("body").append(cardSelectionArrayScript);
	

// load card stack then compare at intervals 

$("#cardStack").load("../session/" + sessionStorage.getItem("gameStatus") + "/cardStack.html");

var reshuffling = false;

setInterval(function() {

	$("#hiddenCardStack").load("../session/" + sessionStorage.getItem("gameStatus") + "/cardStack.html", function() {
	
		if($("#hiddenCardStack").children().length !== $("#cardStack").children().length && reshuffling !== true) {
		
			$("#cardStack").load("../session/" + sessionStorage.getItem("gameStatus") + "/cardStack.html");
		
		}
	
	});

}, 1000);
	
// load participants array 

	var participantsArrayScript = '<script src="../session/' + sessionStorage.getItem("gameStatus") + '/participantsArray.js"></script>';
	
	$("body").append(participantsArrayScript);
	
$("#market.cards").html('<button class="Cards"></button> <button class="cards"></button> <button class="cards"></button> <button class="cards"></button> <button class="cards"></button> <button class="cards"></button>');
			
$("#market .cards").html('<div class="lblWhot">Whot</div> <br><br> <div class="lblWhot2">Whot</div> ');


// define card icons at intervals 

setInterval(function() {

	$(".Star").html("S");
	
	$(".Angle").html("A");
	
	$(".Carpet").html("C");
	
	$(".Whot").html('<label class="lblWhot">Whot</label> <div class="lblWhot2">Whot</div>');
	
	$(".Ball").html("B");
	
	$(".Cross").html("X");
	
	$(".smallStar").html("S");
	
	$(".smallAngle").html("A");
	
	$(".smallCarpet").html("C");
	
	$(".smallWhot").html("W");
	
	$(".smallBall").html("B");
	
	$(".smallCross").html("X");
	
}, 200);

	// first produce card holders according to number of participants 

	var lnth = participantsArray.length;
	
	var y = 0;
	
	var holder = '<button class="othersCards"></button>';
	
	var allHolders = "";
			
	while(y < lnth ) {
	
		allHolders += holder;
			
		y++;
				
	}
	
	$("#othersCardsHolder").html(allHolders);
				
// arrange others cards at the top of game and refresh at intervals 

setInterval(function() {
				
	// loop through each participants cards in his file to get the number of cards he has
	
	var x = 0;
	
	var lnth = participantsArray.length;
	
	startLooping();
	
	function startLooping() {

		$("#otherCardsLooper").load("../session/" + sessionStorage.getItem("gameStatus") + "/cards/" +  participantsArray[x].trim().toLowerCase().replace(/ /g,  "") + ".html", function() {
		
			// call the display function which will display overturned cards according to the number of cards gotten from the loop

			$(".othersCards").eq(x).html(display($("#otherCardsLooper .cards").length));
			
			// after displaying arrange them

			var lth = $(".othersCards").length;

			var i = 0;

			while( i < lth ) {

				var lth2 = $(".othersCards").eq(i).children(".cards").length;
	
				var i2 = 0;

				var x2 = 0;

				while(i2 < lth2) {
	
					$(".othersCards").eq(i).children(".cards").eq(i2).css("transform", "rotate(" + x2 + "deg)");
	
					x2 += 10;
	
					i2++;
	
				}
	
				i++;

			}

			x++;
		
			repeat();
		
		});
		
	}
	
	function repeat() {
		
		if(x < lnth)  {
		
			startLooping();
		
		}
		
		else {
		
		}
	
	}
	
		// function to display overturned cards
	
		function display(i) {
		
			var num = 0;
			
			var otherCards = "";
			
			while(num < i) {
			
				otherCards += '<button class="cards"> <label class="lblWhot">Whot</label> <br> <div class="lblWhot2">Whot</div> </button>';
				
				num++;
				
			}
		
			return (otherCards);
			
		}
	
}, 1000);
						
	// load participants on title Bar
	 		
	var x  =  0;
	
	var participantsOnArray = "";
	
	while(x < participantsArray.length) {
	
		participantsOnArray += '<div class="eachParticipant"> <img class="eachParticipantPicture"></img>  <div class="eachParticipantName">' + participantsArray[x] + '</div> </div>';
		
		x++;
	
	}
	
	$("#participantsBar").html(participantsOnArray);
	
// display player as well as successive player on heading
	
	var nextPlayerIndex = 0;
		
	setInterval(function() {
	
			// load current player index 
	
	 		$("#currentPlayer").load("../session/" + sessionStorage.getItem("gameStatus") + "/currentPlayerIndex.txt", function() {
	 		
				// load current player index 
	
	 			$("#currentCommand").load("../session/" + sessionStorage.getItem("gameStatus") + "/command.txt", function() {
	 		
					// load successive Player bool from file
	
	 				$("#successivePlayerClearer").load("../session/" + sessionStorage.getItem("gameStatus") + "/playerStatus/" + participantsArray[Number($("#currentPlayer").html())].trim().toLowerCase().replace(/ /g,  "") + ".txt", function() {
	 		
		// determine value of nextPlayerIndex variable 
	
		if(Number($("#currentPlayer").html()) + 1 < participantsArray.length) {
	
			nextPlayerIndex = Number($("#currentPlayer").html()) + 1;
	
		}
	
		else {
	
			nextPlayerIndex = 0;
	
		}

	// loop through each player to find current player
	 		
			var eachParticipantLength = $(".eachParticipant").length;
			
			var currentPlayerIndex = $("#currentPlayer").html();
		
			// change appearance of current player 
			
					$(".eachParticipant").css("border", "5px solid #0F2231");
				
					$(".eachParticipant").eq(currentPlayerIndex).css("border", "5px solid green");
			
			// change appearance of successive player only if the current player playerStatus file is true ( this means he has begun playing and his game is susceptible to be snatched )
					
	 				if($("#successivePlayerClearer").html() == "true") {
	
						$(".eachParticipant").eq(nextPlayerIndex).css("borderTop", "5px solid orange");
				
						$(".eachParticipant").eq(nextPlayerIndex).css("borderBottom", "5px solid orange");
						
					}
					
			// change appearance of commanded player 
					
	 				if($("#currentCommand").html() == "1") {
	
						$(".eachParticipant").css({
							borderLeft: "5px solid red",
							borderRight: "5px solid red"
						});
						
						$(".eachParticipant").eq(currentPlayerIndex).css({
							border: "5px solid green"
						});
						
						if(Number($("#currentPlayer").html()) !== participantsArray.indexOf(localStorage.getItem("scrabblitUsername"))) {
						
							remark("Hold on");
						
						}
						
					}
				
	 				else if($("#currentCommand").html() == "2") {
	
						$(".eachParticipant").eq(nextPlayerIndex).css({
							borderLeft: "5px solid red",
							borderRight: "5px solid red"
						});
						
						if(participantsArray.indexOf(localStorage.getItem("scrabblitUsername")) == nextPlayerIndex) {
						
							remark("Pick two");
						
						}
						
					}
						
	 				else if($("#currentCommand").html() == "5") {
	
						$(".eachParticipant").eq(nextPlayerIndex).css({
							borderLeft: "5px solid red",
							borderRight: "5px solid red"
						});
						
						if(participantsArray.indexOf(localStorage.getItem("scrabblitUsername")) == nextPlayerIndex) {
						
							remark("Pick three");
						
						}
						
					}
						
	 				else if($("#currentCommand").html() == "20") {
	
						$(".eachParticipant").eq(nextPlayerIndex).css({
							borderLeft: "5px solid red",
							borderRight: "5px solid red"
						});
						
						if(participantsArray.indexOf(localStorage.getItem("scrabblitUsername")) == nextPlayerIndex) {
						
							// load whot shape file 
					
							$("#whotShapeChecker").load("../session/" + sessionStorage.getItem("gameStatus") + "/whotShape.txt", function() {
					
								remark("I need " + $("#whotShapeChecker").html());
							
							});
						
						}
						
					}
					
	 				else if($("#currentCommand").html() == "14") {
	
						$(".eachParticipant").css({
							borderLeft: "5px solid red",
							borderRight: "5px solid red"
						});
						
						$(".eachParticipant").eq(currentPlayerIndex).css({
							border: "5px solid green"
						});
						
						remark("General market");
						
					}
					
					else {
					
						remark("");
					
					}
				
				});
	
			});
			
		});
	
	}, 500);
	
	function displayCommanded() {
	
	
	}

	setInterval(function() {
	
		var lth = $("#cardStack").children(".cards").length;
	
		var i = 0;

		var x = 0;

		while(i < lth) {
	
			$("#cardStack").children(".cards").eq(i).css("transform", "rotate(" + x + "deg)");
		
			x += 2;
	
			i++;
		
		}
	
		var lth = $("#market").children(".cards").length;
	
		var i = 0;

		var x = 0;

		while(i < lth) {
	
			$("#market").children(".cards").eq(i).css("marginLeft", x);
		
			$("#market").children(".cards").eq(i).css("bottom", x);
		
			x += 0.5;
	
			i++;
		
		}
	
	}, 200);

});