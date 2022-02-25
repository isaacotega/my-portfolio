function activateCardEventListener() {

		$("#myCards .cards").click(function() {
		
		// first determine value of nextPlayerIndex variable 
	
		var nextPlayerIndex = 0;
		
		if(Number($("#currentPlayer").html()) + 1 < participantsArray.length) {
	
			nextPlayerIndex = Number($("#currentPlayer").html()) + 1;
	
		}
	
		else {
	
			nextPlayerIndex = 0;
	
		}

			//first check ifit is the persons turn or not
		
			if(participantsArray.indexOf(localStorage.getItem("scrabblitUsername")) == Number($("#currentPlayer").html())) {
			
			// if it is check if the card is correct 
			
				var clickedCard = $(this);
					
				var clickedCardShape =  $(this).children(".largeShape").children().attr("class");
				
				var clickedCardNumber =  $(this).children(".number").html();
				
			// first load player status 
			
			// if he hasnt played at all it will be false else it will be true 

			$("#firstPlayChecker").load("../session/" + sessionStorage.getItem("gameStatus") + "/playerStatus/" + localStorage.getItem("accountInformation") + ".txt", function() {
			
				// if not true ( or false )
		
				if($("#firstPlayChecker").html() !== "true") {
				
					// load whot command file check if he has been issued a whot command
					
					$("#whotCommandChecker").load("../session/" + sessionStorage.getItem("gameStatus") + "/whotCommand.txt", function() {
					
					// if he has been issued a whot command
					
					if($("#whotCommandChecker").html() == localStorage.getItem("accountInformation")) {
					
						// load whot shape file 
					
					$("#whotShapeChecker").load("../session/" + sessionStorage.getItem("gameStatus") + "/whotShape.txt", function() {
					
						// check if shape of clickedcard matches that of what shape
					
							if( $("#whotShapeChecker").html() == clickedCardShape ) {
							
							// if it does play as current player 
							
							$("#cardStack").append(clickedCard);
		
		setTimeout(function() {
		
				$(clickedCard).remove();
				
			}, 1000);
		
			playAsCurrentPlayer(clickedCardNumber);
							
							}
							
							else {
							
								// if it doesnt
							
								toast( "Whot command requires you to play a " + $("#whotShapeChecker").html());
							
							}
						
						});
					
					}
					
					// if he hasnt been issued a whot command carry on with normal process
					
					else {
				
					// check based on shape or number 
					
					if( $("#cardStack").children(".cards").eq($("#cardStack .cards").length - 1).children(".largeShape").children().attr("class") == clickedCardShape || $("#cardStack").children(".cards").eq($("#cardStack .cards").length - 1).children(".number").html() == clickedCardNumber ) {
							
							// if either matches carry on with playing card
							
		$("#cardStack").append(clickedCard);
		
		setTimeout(function() {
		
				$(clickedCard).remove();
				
			}, 1000);
		
			playAsCurrentPlayer(clickedCardNumber);
					
					}
			
					else {
					
						// if neither matches check if he has a hold on
						
						
			$("#holdOnChecker").load("../session/" + sessionStorage.getItem("gameStatus") + "/holdOnHolder.txt", function() {
			
				// if his name is in the file ( he has a hold on )
		
				if($("#holdOnChecker").html() == localStorage.getItem("accountInformation")) {
				
				// carry on with playing card
				
					$("#cardStack").append(clickedCard);
		
		setTimeout(function() {
		
				$(clickedCard).remove();
				
			}, 1000);
		
			playAsCurrentPlayer(clickedCardNumber);
				
	// get his name out of holdOnHolder file

	$.ajax({
		type: "POST",
		url: "../scripts/whot/holdOnHolderUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			name: ""
		},
		cache: false
	});
	
				}
				
				// he has no hold on 
				
				else {
			
						toast ("Card to be played must possess either the same shape or number as the card at the top of the card stack");
						
						}
						
						});

			
					}
					
				}
				
				});
			
			}
				
				// if status is true
				
				else {
				
					// check based on number alone 
				
					if( $("#cardStack").children(".cards").eq($("#cardStack .cards").length - 1).children(".number").html() == clickedCardNumber ) {
					
						// if number matches still carry on with playing card
					
						
		$("#cardStack").append(clickedCard);
		
		setTimeout(function() {
		
				$(clickedCard).remove();
				
			}, 1000);
		
			playAsCurrentPlayer(clickedCardNumber);
			
					
					}
					
					else {
					
						// if it doesnt match
					
						toast( "Card to be played must possess the same number as the card at the top of the card stack" );
					
					}
				
				}
				
			});
			
			
		}
			// if not current player then check if it is the successive player
		
			else if(participantsArray.indexOf(localStorage.getItem("scrabblitUsername")) == nextPlayerIndex && $("#successivePlayerClearer").html() == "true") {
			
			// if it is check if the card is correct 
			
				var clickedCard = $(this);
					
				var clickedCardShape =  $(this).children(".largeShape").children().attr("class");
				
				var clickedCardNumber =  $(this).children(".number").html();
				
			// first load status 
			
			// if he hasnt played at all it will be false else it will be true 

			$("#firstPlayChecker").load("../session/" + sessionStorage.getItem("gameStatus") + "/playerStatus/" + localStorage.getItem("accountInformation") + ".txt", function() {
			
				// if not true ( or false )
		
				if($("#firstPlayChecker").html() !== "true") {
				
					// check based on shape or number 
					
					if( $("#cardStack").children(".cards").eq($("#cardStack .cards").length - 1).children(".largeShape").children().attr("class") == clickedCardShape || $("#cardStack").children(".cards").eq($("#cardStack .cards").length - 1).children(".number").html() == clickedCardNumber ) {
							
							// if either matches carry on with playing card
							
		$("#cardStack").append(clickedCard);
		
		setTimeout(function() {
		
				$(clickedCard).remove();
				
			}, 1000);
		
			playAsSuccessivePlayer(clickedCardNumber);
					
					}
			
					else {
					
						// if neither matches
			
						toast ("Card to be played must possess either the same shape or number as the card at the top of the card stack");
			
					}
					
				}
				
				// if status is true
				
				else {
				
					// check based on number alone 
				
					if( $("#cardStack").children(".cards").eq($("#cardStack .cards").length - 1).children(".number").html() == clickedCardNumber ) {
					
						// if number matches still carry on with playing card
					
						
		$("#cardStack").append(clickedCard);
		
		setTimeout(function() {
		
				$(clickedCard).remove();
				
			}, 1000);
		
			playAsSuccessivePlayer(clickedCardNumber);
			
					
					}
					
					else {
					
						// if it doesnt match
					
						toast( "Card to be played must possess the same number as the card at the top of the card stack" );
					
					}
				
				}
				
			});
			
			
		}
			else {
			
				// if it is neither current nor successive player 
		
				toast("Its not your turn");
		
			}
			
		});
		
}
	
// market click event listener 
$(document).ready(function() {
	
	$("#market").click(function() {
	
		var nextPlayerIndex = 0;
	
		// determine value of nextPlayerIndex variable 
	
		if(Number($("#currentPlayer").html()) + 1 < participantsArray.length) {
	
			nextPlayerIndex = Number($("#currentPlayer").html()) + 1;
	
		}
	
		else {
	
			nextPlayerIndex = 0;
	
		}
		
		// if current player goes to market

		if(participantsArray.indexOf(localStorage.getItem("scrabblitUsername")) == $("#currentPlayer").html()) {
	
				// ensure the person has not played a card as a current player 
				
				$("#marketEligibility").load("../session/" + sessionStorage.getItem("gameStatus") + "/playerStatus/" + localStorage.getItem("accountInformation") + ".txt", function() {
				
					if($("#marketEligibility").html() !== "true") {
				
			pick(1);
			
	// update playerStatus of himself as true

		$.ajax({
			type: "POST",
			url: "../scripts/whot/playerStatusUpdater.php",
			data: {
				gameFolder: sessionStorage.getItem("gameStatus"),
				name: localStorage.getItem("accountInformation"),
				status: "false"
			},
			cache: false
		});
	
			updateCurrentPlayer();
	
					}
					
					// but if he has played a card previously 
					
					else {
					
						toast("You cannot access the market after you have played a card");
					
					}
					
				});
	
		}
		
			// else If successive player goes to market
		
			else if(participantsArray.indexOf(localStorage.getItem("scrabblitUsername")) == nextPlayerIndex && $("#successivePlayerClearer").html() == "true") {
			
						pick(1);
				
						// update playerStatus of current player to false

						$.ajax({
							type: "POST",
							url: "../scripts/whot/playerStatusUpdater.php",
							data: {
								gameFolder: sessionStorage.getItem("gameStatus"),
								name: participantsArray[Number($("#currentPlayer").html())].trim().toLowerCase().replace(/ /g,  ""),
								status: "false"
							},
							cache: false
						});

						// make the player after him the current player by calling the updateCurrentPlayer function twice
	
						updateCurrentPlayer();
	
						updateCurrentPlayer();
						
			}
					
		else {
		
			toast("Its not your turn");
		
		}
	
	});
	
});