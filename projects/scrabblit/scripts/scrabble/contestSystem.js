//openContest();

// by default as it is false current contestants orange border will not be checked for

var showContestants = false;

function openContest() {

// declaring index variable as user position on participants array

var index =  participantsArray.indexOf(localStorage.getItem("scrabblitUsername"));

// declare next contestant as a step ahead

var nextContestantIndex = index + 1;

// begin contest by calling the beginContest function 

beginContest();

function beginContest() {

		// make it possible for contestant orange border to show current player will also not show as contestant file will be updated beloe

		showContestants = true;

		//send AJAX request to increment index of current potential conteste
		updateContestant( participantsArray[nextContestantIndex].toString().trim().toLowerCase().replace(/ /g, "") );
		
	//also ensure the next contester not the last player on the participants array
		
		if(nextContestantIndex + 1 !== participantsArray.length) {
		
		// if not increment nextContestantIndex variable

			nextContestantIndex++;
		
		}
		
		else {
		
		// else return it back to zero
		
			nextContestantIndex = 0;
		
		}
		
// prevent repetition by making sure player is not nextContestant

	if(nextContestantIndex !== index) {
	
	// if cleared give some time for contestant to decide whether to contest before calling the repeatContest function which will repeat the beginContest function 
		
		setTimeout(function() {
	
			repeatContest();

		}, 3000);

	}

	else {
	
	// contest is over

		setTimeout(function() {
	
		//send AJAX request to set contestant file to empty 
		
			updateContestant("empty");
			
		//clear all border
			
			$(".eachParticipant").css("border", "0px solid");
			
		// deactivate contestants orange border
			
			showContestants = false;
			
		// call the display contestants function 
		
			displayContestants();
			
		}, 3000);

	}

}

function repeatContest() {

	beginContest();

}

}

function updateContestant(contestantName) {
		
	$.ajax({
		type: "POST",
		url: "../scrabble/scripts/contestantUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			contestantName: contestantName
		},
		cache: false
		
	});
		
}
	
	// by default 
	
	var someoneContested = false;

function displayContestants() {
	
	var i = 0;
	
	// begins to display those who contests

	beginDisplay();
	
	function beginDisplay() {
	
		$("#contestantChecker").load("../session/" + sessionStorage.getItem("gameStatus") + "/contestants/" + participantsArray[i].toString().trim().toLowerCase().replace(/ /g, "") + ".txt", function() {
		
			if($("#contestantChecker").html() == "true") {
				
				someoneContested = true;
			
				$(".eachParticipant").eq(i).css("border", "5px solid red");
			
			}
		
			// increment index
		
			i++;
		
			// prevent repeat
		
			if(i < participantsArray.length) {
	
				setTimeout(function() {
	
					repeatDisplay();

				}, 200);
		
			}
		
			else {
		
	// once all contesters has been displayed check if anyone contested
	
			// if no one did
			/*
							$("#rack").load("../session/" + sessionStorage.getItem("gameStatus") + "/racks/" + localStorage.getItem("accountInformation") + ".txt", function() {
							
								var allSeeds = $("#rack").html();
								
								var returnedSeeds = $(allSeeds).remove(previousSeeds);
								
								alert( "allseeds:" + $(allSeeds).html() + "previousSeeds:" +  $(previousSeeds).html() + "returnedSeeds" +  $(returnedSeeds).html() );
								
								$(returnedSeeds).css({
									background: "green"
								
								});
							
							});
			*/
				if(someoneContested == false) {
				
					// grab remaining seeds
				
					var previousSeeds = $("#rack").html();
			//	alert( previousSeeds );
					// call function which will update current player 
					
					updateCurrentPlayer();
					
					//send AJAX request to empty contestant file 
		
					updateContestant("");
			
					// turn all hovering seeds into permanent ones
	
					$(".hangingSeed").attr("class", "placedSeed");
					
					// deactivate the isPlaying variable
	
					isPlaying = false;
					
					// change appearance of newly added seeds
					
					//quickly replace seeds
					
					replaceSeeds();
					
					// grabs all seeds
						
					setTimeout(function() {
					
					var allSeeds = $("#rack").html();
						//		alert( allSeeds );
					var newSeeds = $("#rack").html().replace(previousSeeds, "");
							//	alert( newSeeds );
				//	alert( "allseeds:" + allSeeds + "previousSeeds:" +  previousSeeds + "newSeeds" +  newSeeds );
				
				// 
								
							$("#rack").children(newSeeds).css({
								background: "green"
								
							});
							
					}, 1000);
	
					

					//sending of current  gameboard
	
					setTimeout(function() {
					
						sendCurrentGameboard();
					
					}, 2000);
	
					// set reloadGameBoard to true after a little time 
					
					setTimeout(function() {
					
						reloadGameBoard = true;
						
					}, 2000);
	
				}
				
		// else if someone contested
				
				else if(someoneContested == true) {
				
				// call the function which will wait for results from host
				
					awaitResultFromHost();
				
				}
				
				else {}
		
			}

		});

	}
	
	function repeatDisplay() {

		beginDisplay();

	}

}
/*
var test = $("<label>par</label> <span>span</span>");

$(test).remove("label");

alert( $(test).html() )
*/
// when user clicks the contest button 

$("#btnContest").click(function() {

	var path = "../../session/" + sessionStorage.getItem("gameStatus") + "/contestants/" + localStorage.getItem("accountInformation") + ".txt";

// update user contest file to true
					
	$.ajax({
		type: "POST",
		url: "../scripts/scrabble/individualContestUpdater.php",
		data: {
			path: path
		},
		cache: false
	});

});

// check if the user is the host and someone contested

setInterval(function() {

	var i = 0;
		
	var eachParticipantLength = $(".eachParticipant").length;
	
	while(i < eachParticipantLength) {

		$("#contestantChecker").load("../session/" + sessionStorage.getItem("gameStatus") + "/contestants/" + participantsArray[i].toString().trim().toLowerCase().replace(/ /g, "") + ".txt", function() {
		
			if($("#contestantChecker").html() == "true") {
				
				someoneContested = true;
			
				$(".eachParticipant").eq(i).css("border", "5px solid red");
			
			}
		
		});
		
		// increment index
		
		i++;
			
	}
		
	if(localStorage.getItem("accountInformation") == $(".eachParticipant").eq(0).children(".eachParticipantName").html().trim().toLowerCase().replace(/ /g, "") && someoneContested == true) {
					
	// if so reveal divAcceptSeed
						
		$("#divAcceptSeed").css({
			height: "30%"
		});
					
	}
	
	else {
	
	// else hide it
	
		$("#divAcceptSeed").css({
			height: "0%"
		});
					
	}
					
}, 200);






// when the host clicks yes to accept the word

$("#acceptSeedYes").click(function() {

	updateEveryoneContestToFalse();
	
	someoneContested = false;
	
	// call function which will update host result
					
	giveResult("Yes");

	// call function which will update current player 
					
	updateCurrentPlayer();
					
	//send AJAX request to empty contestant file 
		
	updateContestant("");
			
	// turn all hovering seeds into permanent ones
	
	$(".hangingSeed").attr("class", "placedSeed");
					
	//saving of current  gameboard
	
	sendCurrentGameboard();
	
	// hide divAcceptSeed
	
	$("#divAcceptSeed").css({
		height: "0%"
	});
	
});

// when the host clicks No to reject the word

$("#acceptSeedNo").click(function() {

	updateEveryoneContestToFalse();

	someoneContested = false;

	// call function which will update host result
					
	giveResult("No");

	// call function which will update current player 
					
	updateCurrentPlayer();
					
	//send AJAX request to empty contestant file 
		
	updateContestant("");
			
	// remove all hovering seeds
	
	$(".hangingSeed").remove();
					
	// saving of current  gameboard
	
	sendCurrentGameboard();
	
	// hide divAcceptSeed
	
	$("#divAcceptSeed").css({
		height: "0%"
	});
					
});
setTimeout(function() {

	}, 2000);
	
// function which will either replace seeds or return them depending on response from host

function awaitResultFromHost() {

toast( "Awaiting results from the host" );

	checkStatus();

	function checkStatus() {
	
	// checks if the next player is now the current player
	
	// the next player becomes the current player as soon as host clicks either the yes or no button
	
		if(Number($("#currentPlayer").html()) == Number(participantsArray.indexOf(localStorage.getItem("scrabblitUsername"))) + 1) {
		
		// first load hosts response from file
		
			$("#hostResult").load("../session/" + sessionStorage.getItem("gameStatus") + "/hostResult.txt", function() {
			
				// if response is no
		
				if($("#hostResult").html() == "No") {
				
					toast("Rejected");
					
	//				var previousSeeds = $("#rack").html();
				
					// return his seeds through AJAX
					
					$.ajax({
						type: "POST",
						url: "../scripts/scrabble/seedReturner.php",
						data: {
						gameFolder: sessionStorage.getItem("gameStatus"),
						username: localStorage.getItem("accountInformation")
						},
						cache: false,
						success: function() {
						/*
							// load rack which this AJAX call has returned it's seeds from backup so as to change appearance of newly return seeds
							
							$("#rack").load("../session/" + sessionStorage.getItem("gameStatus") + "/racks/" + localStorage.getItem("accountInformation") + ".txt", function() {
							
								var allSeeds = $("#rack").html();
								
								var returnedSeeds = $(allSeeds).remove(previousSeeds);
								
								alert( "allseeds:" + $(allSeeds).html() + "previousSeeds:" +  $(previousSeeds).html() + "returnedSeeds" +  $(returnedSeeds).html() );
								
								$(returnedSeeds).css({
									background: "green"
								
								});
							
							});
			
						*/
						// deactivate isPlaying so his seeds can be replaced only after seed has been returned and clear hostResult both in server and client side
						
							isPlaying = false;
							
							$("#hostResult").html("");
							
							giveResult("");
							
						}
						
					});

				
				}
				
					// but if his response is yes deactivate isPlaying so his seeds can be replaced and clear hostResult both in server and client side
					
				else if($("#hostResult").html() == "No") {
				
					isPlaying = false;
				
					$("#hostResult").html("");
					
					giveResult("");
							
				}
				
				else {}
				
			// no need to save gameboard as host click of button has already handled it
				
			});
			
		}
		
		else {
		
			setTimeout(function() {

				repeat();
		
			}, 2000);
	
		}
	
	}

	function repeat() {
	
		checkStatus();
	
	}

}


function updateCurrentPlayer() {

	var nextPlayer;
					
	if(Number($("#currentPlayer").html()) + 1 <= participantsArray.length) {
					
		nextPlayer = Number($("#currentPlayer").html()) + 1;
				
	}
					
	else {
					
		nextPlayer = 0;
					
	}
				
	// update current player
					
	$.ajax({
		type: "POST",
		url: "../scripts/scrabble/currentPlayerUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			nextPlayer: nextPlayer
		},
		cache: false
	});
		
}

function updateEveryoneContestToFalse() {

	var i = 0;
	
	var eachParticipantLength = $(".eachParticipant").length;
	
	while(i < eachParticipantLength) {

	var path = "../../session/" + sessionStorage.getItem("gameStatus") + "/contestants/" + participantsArray[i].toString().trim().toLowerCase().replace(/ /g, "") + ".txt";

	// update everyone contest to false
					
		$.ajax({
			type: "POST",
			url: "../scripts/scrabble/everyoneContestUpdater.php",
			data: {
				path: path
			},
			cache: false
		});
		
		i++;

	}

}

function sendCurrentGameboard() {

	$.ajax({
		type: "POST",
		url: "../scripts/scrabble/gameUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			gameBoard: $("#gameBoard").html()
		},
		cache: false
	});

}

function giveResult(result) {

	$.ajax({
		type: "POST",
		url: "../scripts/scrabble/hostResultUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			result: result
		},
		cache: false
	});

}