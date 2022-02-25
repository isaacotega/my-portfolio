// hidden element to load current player index on interval 

//  alert( "1.  get new seeds to change appearance for a moment of no one contests do the same if host disagrees and seed is returned 2.  score. 3. contestSystem.js from line 432" );
setInterval(function() {

$("#currentPlayer").load('../session/' + sessionStorage.getItem("gameStatus") + '/currentPlayerIndex.txt');

}, 1000);

//ensures reloadGameBoard is set to true before gameBoard is allowed to reload at intervals 

// by default

var reloadGameBoard = true;

setInterval(function() {

	if(reloadGameBoard == true) {
	
		$("#gameBoard").load("../session/" + sessionStorage.getItem("gameStatus") + "/gameBoard.html", function(responseTxt, statusTxt,  xhr) {
		
			if(xhr.status == 200) {
			
			//	replaceSeeds();
			
			}
			
			else if(xhr.status == 404) {
			
				$("#rack").html('<label class="lblGameStatus"> <br> The host has ended this game</label>');
			
			}
			
			else {}
		
		});
	
	}

}, 500);

//save current seed in variable when seed is clicked
	
var currentSeed = "";

// by default 

var isPlaying = false;

//setting interval of 1 second

setInterval(function() {

//saving current seed in variable 

$(".seed").click(function() {

	if($("#currentPlayer").html() == participantsArray.indexOf(localStorage.getItem("scrabblitUsername"))) {
	
	// save seed as currentSeed

		currentSeed = $(this);
		
	// set reloadGameBoard to false
	
		reloadGameBoard = false;
		
//changing appearance and reversing that of others


	$(".seed").css({
	
		"box-shadow": "0 0 0 0"
	
	});


	$(this).css({
	
		"box-shadow": "0 0 40px 20px #384C3B"
	
	});

	}
	
	else {
	
		toast("It is not your turn");
	
	}
	
});

//drop seed when board is clicked

$("#gameBoard tr td").click(function() {

//ensures current seed is not empty

	if(currentSeed !== "") {
	
		// activate the isPlaying variable 
	
		isPlaying = true;
	
		//placing  seed on board
	
		 $(this).html('<div class="hangingSeed">' +  '<label class="letter">' + $(currentSeed).children(".letter").html() + '</label> <br> <label class="point">' + $(currentSeed).children(".point").html() + ' </label>' + '</div>');
		 
		currentSeed.remove();
		 
		// empty current seed variable 

		currentSeed = "";
		
	//reverse clicked appearance of seed
	
		$(".seed").css({
	
			"box-shadow": "0 0 0 0"
	
		});
			
		// update rack
		 
	$.ajax({
		type: "POST",
		url: "../scripts/scrabble/rackUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			rack: $("#rack").html(),
			username: localStorage.getItem("accountInformation")
		},
		cache: false
			
	});

		// display submit game button

		$("#submitGame").css("display", "block");
		 
	};

});

}, 1000);

// submission of game

	// declare contestIsOn variable
	
var contestIsOn = false;
	
$("#submitGame").click(function() {

	//sending of current  gameboard
	
	$.ajax({
		type: "POST",
		url: "../scripts/scrabble/gameUpdater.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			gameBoard: $("#gameBoard").html()
		},
		cache: false, 
		success: function() {
		
	//empty currentSeed variable
	
			setTimeout(function() {
	
				currentSeed = "";
			
			}, 2000);
			
	//reverse clicked appearance of seed
	
			$(".seed").css({
	
				"box-shadow": "0 0 0 0"
	
			});
			
		}
			
	});

// hide submit button
	
	$(this).css("display", "none");

			// contesting system 
			
	openContest();
			
});