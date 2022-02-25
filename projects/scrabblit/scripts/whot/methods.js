//array of objects of cards

var cardSelection = [

	{shape: "Carpet", point: 1, distribution: 1},
	{shape: "Ball", point: 2, distribution: 1},
	{shape: "Star", point: 3, distribution: 1},
	{shape: "Angle", point: 4, distribution: 1},
	{shape: "Whot", point: 5, distribution: 1},
	{shape: "Carpet", point: 6, distribution: 1},
	{shape: "Cross", point: 7, distribution: 1},
	{shape: "Star", point: 8, distribution: 1},
	{shape: "Angle", point: 9, distribution: 1},
	{shape: "Whot", point: 10, distribution: 1},
	{shape: "Carpet", point: 11, distribution: 1},
	{shape: "Ball", point: 12, distribution: 1},
	{shape: "Star", point: 13, distribution: 1},
	{shape: "Angle", point: 14, distribution: 1},
	{shape: "Whot", point: 15, distribution: 1},
	{shape: "Cross", point: 16, distribution: 1},
	{shape: "Ball", point: 17, distribution: 1},
	{shape: "Star", point: 18, distribution: 1},
	{shape: "Angle", point: 19, distribution: 1},
	{shape: "Cross", point: 20, distribution: 1},
	{shape: "Carpet", point: 21, distribution: 1},
	{shape: "Ball", point: 22, distribution: 1},
	{shape: "Star", point: 23, distribution: 1},
	{shape: "Angle", point: 24, distribution: 1},
	{shape: "Whot", point: 25, distribution: 1},
	{shape: "Carpet", point: 26, distribution: 1},
	{shape: "Cross", point: 27, distribution: 1},
	{shape: "Star", point: 28, distribution: 1},
	{shape: "Angle", point: 29, distribution: 1},
	{shape: "Whot", point: 30, distribution: 1},
	{shape: "Carpet", point: 31, distribution: 1},
	{shape: "Ball", point: 32, distribution: 1},
	{shape: "Star", point: 33, distribution: 1},
	{shape: "Angle", point: 34, distribution: 1},
	{shape: "Whot", point: 35, distribution: 1},
	{shape: "Carpet", point: 36, distribution: 1},
	{shape: "Ball", point: 37, distribution: 1},
	{shape: "Star", point: 38, distribution: 1},
	{shape: "Cross", point: 39, distribution: 1},
	{shape: "Whot", point: 40, distribution: 1},
	{shape: "Ball", point: 41, distribution: 1},
	{shape: "Star", point: 42, distribution: 1},
	{shape: "Angle", point: 43, distribution: 1},
	{shape: "Whot", point: 44, distribution: 1},
	{shape: "Carpet", point: 45, distribution: 1},
	{shape: "Ball", point: 46, distribution: 1},
	{shape: "Star", point: 47, distribution: 1},
	{shape: "Angle", point: 48, distribution: 1},
	{shape: "Cross", point: 49, distribution: 1},
	{shape: "Carpet", point: 50, distribution: 1},
	{shape: "Ball", point: 51, distribution: 1},
	{shape: "Star", point: 52, distribution: 1},
	{shape: "Angle", point: 53, distribution: 1},
	{shape: "Whot", point: 54, distribution: 1},
	
];

function remark(text) {

	$("#remark").html(text).css("fontSize", "60px");
	
}

function sendCard(receiver) {

			// before picking card check if cards in market are still remaining
			
			if(Number($("#cardSelectionIndex").html()) > 53) {
			
				// if not turn card Selection Index file content to zero through AJAX
			
				$.ajax({
					type: "POST",
					url: "../scripts/whot/cardSelectionIndexEmptier.php",
					data: {
						gameFolder: sessionStorage.getItem("gameStatus")
					},
					cache: false
				});
				
				// also empty card stack except from card on the top
				
				var reshuffling = true; 
				
				var x = 0;
				
				while(x < $("#cardStack").children(".cards").length - 1) {
				
					$("#cardStack").children(".cards").eq(x).remove();
				
					x++;
				
				}
				
				setTimout(function() {
	
					reshuffling = false;
					
				}, 500);
				
				// and finally update card stack
			
				updateCardStack();
		
			}
			
			// first load card Selection Index
			
			$("#cardSelectionIndex").load("../session/" + sessionStorage.getItem("gameStatus") + "/cardSelectionIndex.txt", function() {
			
			// after that generate the card index before creating the random card
			
			var cardIndex = cardSelectionArray[Number($("#cardSelectionIndex").html())];

			
			var randomCard = '<button class="cards"> <label class="number">' + cardSelection[cardIndex].point + '</label> <br><br> <div class="smallShape"> <span class="small' + cardSelection[cardIndex].shape + '">  </span> </div> <br> <div class="largeShape"> <span class="' + cardSelection[cardIndex].shape + '">  </span> </div>  <div class="smallShape2"> <span class="small' + cardSelection[cardIndex].shape + '">  </span> </div> <br><br> <label class="number2">' + cardSelection[cardIndex].point + '</label> </button>';
	
			// AJAX request to send card to the person who received the command 
	
	$.ajax({
		type: "POST",
		url: "../scripts/whot/cardSender.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			card: randomCard,
			name: receiver
		},
		cache: false,
		success: function() {
		
				// update card selection index file 
			
				$.ajax({
					type: "POST",
					url: "../scripts/whot/cardSelectionIndexUpdater.php",
					data: {
						gameFolder: sessionStorage.getItem("gameStatus")
					},
					cache: false,
					success: function() {}
				});
				
				}				
				
			});
		});
			
}


//replacement of cards

//check if game has begun 

	 //loading status file to check game status on interval of 1 second
	 		
	 	setInterval(function() {
	 		
	 		$("#gameStatus").load("../session/" + sessionStorage.getItem("gameStatus") + "/status.txt", function(responseTxt,  statusTxt, xhr) {
	 		
	
	 	//display status on rack as appropriate 
	 		
	 			if($("#gameStatus").html() == "pending") {
	 			
	 				$("#gameStatus").html("Waiting for host to begin this game");
	 			
					$("#myCards").html("");
					
					$("#othersCardsHolder").css("display", "none");
					
					$("#cardStack").css("display", "none");
					
					$("#market").css("display", "none");
					
	 			}
	 			
	 			else if($("#gameStatus").html() == "ongoing"){
	 			
	 				$("#gameStatus").html("");
	 			
					$("#othersCardsHolder").css("display", "block");
					
					$("#cardStack").css("display", "block");
					
					$("#market").css("display", "block");
					
					fillCards();
				
	 			}
	 		
	 			else if($("#gameStatus").html() == "paused"){
	 			
	 				$("#gameStatus").html("Paused");
	 			
					$("#myCards").html("");
					
	 			}
	 		
	 			else {}
	 			
	 	});
	
	}, 1000);

	function fillCards() {
	
		// load cards into hidden element then compare 

	$("#hiddenCards").load("../session/" + sessionStorage.getItem("gameStatus") + "/cards/" + localStorage.getItem("accountInformation") + ".html", function(xhr) {
	
	// if cards have been changed
	
		if($("#hiddenCards .cards").length !== $("#myCards .cards").length) {
		
			// refresh them
		
			$("#myCards").load("../session/" + sessionStorage.getItem("gameStatus") + "/cards/" + localStorage.getItem("accountInformation") + ".html", function() {
			
				// and return their event listener 
	
				activateCardEventListener();
			
			});
	
		}

	});

	// if user just joined game his file would not exist and so his cards should be filled up by picking four
	
	if(xhr.status == 404) {
	
			pick(4);
	
	}
	
}
	
// function handling picking of cards

var picking = false;

function pick(amount) {

	picking = true;

	var currentAmount = 1;
	
	pickOne();
	
	function pickOne() {
	
		var lnth = $("#market .cards").length; 
		
		$("#market").children(".cards").eq(lnth - 1).css({
			top: "70px"
		});
		
			// before picking card check if cards in market are still remaining
			
			if(Number($("#cardSelectionIndex").html()) > 53) {
			
				// if not turn card Selection Index file content to zero through AJAX
			
				$.ajax({
					type: "POST",
					url: "../scripts/whot/cardSelectionIndexEmptier.php",
					data: {
						gameFolder: sessionStorage.getItem("gameStatus")
					},
					cache: false
				});
				
				// also empty card stack except from card on the top
				
				var reshuffling = true; 
				
				var x = 0;
				
				while(x < $("#cardStack").children(".cards").length - 1) {
				
					$("#cardStack").children(".cards").eq(x).remove();
				
					x++;
				
				}
				
				setTimout(function() {
	
					reshuffling = false;
					
				}, 500);
				
				// and finally update card stack
			
				updateCardStack();
		
			}
			
		setTimeout(function() {
	
			var cardIndex = cardSelectionArray[Number($("#cardSelectionIndex").html())];

			
			var randomCard = '<button class="cards"> <label class="number">' + cardSelection[cardIndex].point + '</label> <br><br> <div class="smallShape"> <span class="small' + cardSelection[cardIndex].shape + '">  </span> </div> <br> <div class="largeShape"> <span class="' + cardSelection[cardIndex].shape + '">  </span> </div>  <div class="smallShape2"> <span class="small' + cardSelection[cardIndex].shape + '">  </span> </div> <br><br> <label class="number2">' + cardSelection[cardIndex].point + '</label> </button>';
	
			$("#myCards").append(randomCard);
			
				// update card selection index file 
			
				$.ajax({
					type: "POST",
					url: "../scripts/whot/cardSelectionIndexUpdater.php",
					data: {
						gameFolder: sessionStorage.getItem("gameStatus")
					},
					cache: false
				});
			
			
		}, 1000);
	
		setTimeout(function() {
		
			$("#market").children(".cards").eq(lnth - 1).remove();
		
			repeat();
	
		}, 1000);
	
	}
	
	
	
	function repeat() {
	
	if(currentAmount < amount) {
	
		currentAmount++;
	
		pickOne();
	
	}
	
	else {
	
		picking = false;
	
		// call the updateCards function 
	
		updateCards();

	}
	
	}
			
}

function updateCards() {

// update cards
		 
	$.ajax({
		type: "POST",
		url: "../scripts/whot/cardsUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			cards: $("#myCards").html(),
			username: localStorage.getItem("accountInformation")
		},
		cache: false
		
	});
	
}

// function to update current player index 

function updateCurrentPlayer() {

	$.ajax({
		type: "POST",
		url: "../scripts/whot/currentPlayerUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			maxIndex: participantsArray.length - 1
		},
		cache: false
	});

}


// function to play a card as the current player

function playAsCurrentPlayer(number) {
	
	// call the updateCards function 
	
	updateCards();
	
	// update playerStatus of himself as true

	$.ajax({
		type: "POST",
		url: "../scripts/whot/playerStatusUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			name: localStorage.getItem("accountInformation"),
			status: "true"
		},
		cache: false
	});
	
	updateCardStack();
	
	// update command file to the number on the card he played
	
	$.ajax({
		type: "POST",
		url: "../scripts/whot/commandUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			number: number
		},
		cache: false
	});
	
	// also execute commands like pick two which may have been played by player
	
	executeCommands(number);
			
}
	
// function to play a card as a successive player

function playAsSuccessivePlayer(number) {

	// call the updateCards function 
	
	updateCards();

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

	// update playerStatus of himself as true( he is now the current player )

	$.ajax({
		type: "POST",
		url: "../scripts/whot/playerStatusUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			name: localStorage.getItem("accountInformation"),
			status: "true"
		},
		cache: false,
		success: function() {
		
			// then update current player index 
	
			updateCurrentPlayer();
			
			updateCardStack();
		
			// also execute commands like pick two which may have been played by player
	
			executeCommands(number);
			
		}
	});
	
	// update command file to the number on the card he played
	
	$.ajax({
		type: "POST",
		url: "../scripts/whot/commandUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			number: number
		},
		cache: false
	});
	
}
	
// function to update card Stack

function updateCardStack() {

	$.ajax({
		type: "POST",
		url: "../scripts/whot/cardStackUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			cardStack: $("#cardStack").html()
		},
		cache: false
	});

}


	// function which will update command file with the number on played card

function updateCommandFile() {

	$.ajax({
		type: "POST",
		url: "../scripts/whot/commandUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			number: number
		},
		cache: false
	});
	
}