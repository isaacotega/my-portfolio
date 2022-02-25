// function to check for and execute commands 

	function executeCommands(number) {
	
		// first determine value of nextPlayerIndex variable ( participants array indexOf method is used here alone to generate nextPlayerIndex )
		
		var nextPlayerIndex = 0;
		if(participantsArray.indexOf( localStorage.getItem("scrabblitUsername") )  + 1 < participantsArray.length) {
	
			nextPlayerIndex = participantsArray.indexOf( localStorage.getItem("scrabblitUsername") ) + 1;
	
		}
	
		else {
	
			nextPlayerIndex = 0;
	
		}
		
	// if user plays two

		if(number == 2) {
		
	// first update playerStatus of himself as false

	$.ajax({
		type: "POST",
		url: "../scripts/whot/playerStatusUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			name: localStorage.getItem("accountInformation"),
			status: "false"
		},
		cache: false,
		success: function() {
		
			// then update current player index twice so as to make the second person ahead of him the current player 
	
			updateCurrentPlayer();
			
			updateCurrentPlayer();
			
		}
	});
	
		// call the function which will send two cards to the next person 
			sendCard(participantsArray[nextPlayerIndex].trim().toLowerCase().replace(/ /g,  ""));
		setTimeout(function(){	
			sendCard(participantsArray[nextPlayerIndex].trim().toLowerCase().replace(/ /g,  ""));
		
		}, 1000);
			
		}
		
		// else if he plays five( defendable pick three)
		
		else if(number == 5) {
		
		// first check whether he is playing it as command or defense
		
	$("#threePicker").load("../session/" + sessionStorage.getItem("gameStatus") + "/threePicker.txt", function() {
	
			// if it is as a command
		
			if($("#threePicker").html() !== localStorage.getItem("accountInformation")) {
	
			toast("Pick three command sent. Waiting for defence . . .");
			
			$.ajax({
				type: "POST",
				url: "../scripts/whot/threePickerUpdater.php",
				data: {
					gameFolder: sessionStorage.getItem("gameStatus"),
					name: participantsArray[nextPlayerIndex].trim().toLowerCase().replace(/ /g,  "")
				},
				cache: false
			});
			
			setTimeout(function() {
				
				updateStatus();
				
			}, 1000);
			
			setTimeout(function() {
				
				updateStatus();
				
			}, 2000);
			
			setTimeout(function() {
				
				updateStatus();
				
			}, 3000);
			
			setTimeout(function() {
				
				updateStatus();
				
			}, 4000);
			
			setTimeout(function() {
				
				updateStatus();
				
			}, 5000);
			
			setTimeout(function() {
				
				updateStatus();
				
			}, 6000);
			
			setTimeout(function() {
				
				// reload three picker file to see if the next player has defended
				
				$("#threePicker").load("../session/" + sessionStorage.getItem("gameStatus") + "/threePicker.txt", function() {
	
				// empty three picker file 
				
			$.ajax({
				type: "POST",
				url: "../scripts/whot/threePickerUpdater.php",
				data: {
					gameFolder: sessionStorage.getItem("gameStatus"),
					name: ""
				},
				cache: false
			});
			
				// empty three picker Status file 
				
			$.ajax({
				type: "POST",
				url: "../scripts/whot/pickThreeStatusEmptier.php",
				data: {
					gameFolder: sessionStorage.getItem("gameStatus")
				},
				cache: false
			});
			
					// if he has
		
					if($("#threePicker").html() == "") {
	
					toast( "It was defended" );
				
				}
				
				// but if he hasnt
				
				else if($("#threePicker").html() == participantsArray[nextPlayerIndex].trim().toLowerCase().replace(/ /g,  "")) {
				
	// first update playerStatus of himself as false

	$.ajax({
		type: "POST",
		url: "../scripts/whot/playerStatusUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			name: localStorage.getItem("accountInformation"),
			status: "false"
		},
		cache: false,
		success: function() {
		
			// then update current player index twice so as to make the second person ahead of him the current player 
	
			updateCurrentPlayer();
			
			updateCurrentPlayer();
			
		}
	});
	
		// call the function which will send three cards to the next person 
			sendCard(participantsArray[nextPlayerIndex].trim().toLowerCase().replace(/ /g,  ""));
			
		setTimeout(function(){	
			sendCard(participantsArray[nextPlayerIndex].trim().toLowerCase().replace(/ /g,  ""));
		
		}, 1000);

		setTimeout(function(){	
			sendCard(participantsArray[nextPlayerIndex].trim().toLowerCase().replace(/ /g,  ""));
		
		}, 2000);

					toast( "No defense" );
				
				
				}
				
				});
				
			}, 6500);
			
			function updateStatus() {
			
			$.ajax({
				type: "POST",
				url: "../scripts/whot/pickThreeStatusUpdater.php",
				data: {
					gameFolder: sessionStorage.getItem("gameStatus")
				},
				cache: false
			});
			
			}
			
			}
			
			// else it has to be a defense
			
			else {
			
			$.ajax({
				type: "POST",
				url: "../scripts/whot/threePickerUpdater.php",
				data: {
					gameFolder: sessionStorage.getItem("gameStatus"),
					name: ""
				},
				cache: false,
				success: function() {
				
					toast( "Defended" );
				
				}
			});
			
			}
			
			});
		
		}
		
		// else if he plays fourteen( undefendable general market )
		
		else if(number == 14) {
		
			// first determine initial value of receiverIndex variable 
			
			// if current player is not the first on array 
			
			if($("#currentPlayer").html() !== "0") {
				
				// make receiverIndex zero
	
				var receiverIndex = 0;
	
			}
			
			// else make it one
	
			else {
	
				var receiverIndex = 1;
	
			}
			
	// update playerStatus of himself as false

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
	
			begin();
			
			function begin() {
			
				// send a card to each participant 
				if(receiverIndex !== participantsArray.indexOf(localStorage.getItem("scrabblitUsername"))) {
				
					sendCard(participantsArray[receiverIndex].trim().toLowerCase().replace(/ /g,  ""));
					
				}
				
				// call the repeat function 
		
				setTimeout(function() {
		
					repeat();
					
				}, 2000);
					
			}
			
			function repeat() {
			
			// repeat only if it hasnt gotten to the last person on participants array 
			
				if(receiverIndex + 1 !== participantsArray.length) {
	
					receiverIndex++;
			
					begin();
				
				}
			
			}
		
		}
		
		// else if he plays eight( undefendable suspension )
		
		else if(number == 8) {
			
	// update playerStatus of himself as false

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
	
			// then update current player index twice so as to make the second person ahead of him the current player 
	
			updateCurrentPlayer();
			
			updateCurrentPlayer();

		}
		
		// else if he plays one( undefendable hold on )
		
		else if(number == 1) {
			
	// update playerStatus of himself as false

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
	
	// send his name to holdOnHolder file

	$.ajax({
		type: "POST",
		url: "../scripts/whot/holdOnHolderUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			name: localStorage.getItem("accountInformation")
		},
		cache: false
	});
	
		}
		
		// else if he plays twenty( undefendable whot command)
		
		else if(number == 20) {
		
	// update playerStatus of himself as false so next player can't play while he is still deciding what to ask for

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
	
	// reveal whot shape selectors
	
	$("#whotShapesHolder").css({
		display: "block"
	});
	
	$(".whotShapesSelectors").css({
		height: "80px",
		width: "80px"
	});
			
	$(".whotShapesSelectors").click(function() {
	
	// reverse appearance of whot shape selectors
	
	$("#whotShapesHolder").css({
		display: "none"
	});
	
	$(".whotShapesSelectors").css({
		height: "0px",
		width: "0px"
	});
			
			updateCurrentPlayer();
	
		// send whot command through AJAX

	$.ajax({
		type: "POST",
		url: "../scripts/whot/whotCommandSetter.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			name: participantsArray[nextPlayerIndex].trim().toLowerCase().replace(/ /g,  "")
		},
		cache: false
	});
	
			// send whot shape through AJAX

	$.ajax({
		type: "POST",
		url: "../scripts/whot/whotShapeSetter.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			shape: $(this).attr("id")
		},
		cache: false
	});
	
	});
	
		}
	
		else {}

	}
	
	