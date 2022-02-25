//array of objects of seeds

var letterSelection = [

	{letter: "A", point: 1, distribution: 1},
	{letter: "B", point: 1, distribution: 1},
	{letter: "C", point: 1, distribution: 1},
	{letter: "D", point: 1, distribution: 1},
	{letter: "E", point: 1, distribution: 1},
	{letter: "F", point: 1, distribution: 1},
	{letter: "G", point: 1, distribution: 1},
	{letter: "H", point: 1, distribution: 1},
	{letter: "I", point: 1, distribution: 1},
	{letter: "J", point: 1, distribution: 1},
	{letter: "K", point: 1, distribution: 1},
	{letter: "L", point: 1, distribution: 1},
	{letter: "M", point: 1, distribution: 1},
	{letter: "N", point: 1, distribution: 1},
	{letter: "O", point: 1, distribution: 1},
	{letter: "P", point: 1, distribution: 1},
	{letter: "Q", point: 1, distribution: 1},
	{letter: "R", point: 1, distribution: 1},
	{letter: "S", point: 1, distribution: 1},
	{letter: "T", point: 1, distribution: 1},
	{letter: "U", point: 1, distribution: 1},
	{letter: "V", point: 1, distribution: 1},
	{letter: "W", point: 1, distribution: 1},
	{letter: "X", point: 1, distribution: 1},
	{letter: "Y", point: 1, distribution: 1},
	{letter: "Z", point: 1, distribution: 1},
	{letter: "", point: "", distribution: 1}
	];

//replacement of seed

//check if game has begun 

	 //loading status file to check game status on interval of 1 second
	 		
	 	setInterval(function() {
	 		
	 		$("#gameStatus").load("../session/" + sessionStorage.getItem("gameStatus") + "/status.txt", function(responseTxt,  statusTxt, xhr) {
	 		
	
	 	//display status on rack as appropriate 
	 		
	 			if($("#gameStatus").html() == "pending") {
	 			
	 				$("#rack").html('<label class="lblGameStatus"> <br> Waiting for host to begin this game </label>');
	 			
	 			}
	 			
	 			else if($("#gameStatus").html() == "ongoing"){
	 			
	 		// first ensures no seed is currently clicked before replacing seeds to avoid it losing its box shadow
	 			
	 				if(currentSeed == "" && isPlaying == false) {
	 				
	 					replaceSeeds();
	 				
	 				}
	 			
	 			}
	 		
	 			else if($("#gameStatus").html() == "paused"){
	 			
	 				$("#rack").html('<label class="lblGameStatus"> <br> Paused </label>');
	 			
	 			}
	 		
	 			else {}
	 		
	 	});
	
	}, 2000);
	
	function replaceSeeds() {


		$("#rack").load("../session/" + sessionStorage.getItem("gameStatus") + "/racks/" + localStorage.getItem("accountInformation") + ".html", function() {
	
		if(emptyCases() == 7) {
		
			document.getElementById("rack").innerHTML = randomSeed() + randomSeed() + randomSeed()  + randomSeed() + randomSeed() + randomSeed()  + randomSeed();

		}
	
		else if(emptyCases() == 6) {
		
			document.getElementById("rack").innerHTML += randomSeed() + randomSeed() + randomSeed()  + randomSeed() + randomSeed() + randomSeed();

		}
	
		else if(emptyCases() == 5) {
		
			document.getElementById("rack").innerHTML += randomSeed() + randomSeed() + randomSeed()  + randomSeed() + randomSeed();

		}
	
		else if(emptyCases() == 4) {
		
			document.getElementById("rack").innerHTML += randomSeed() + randomSeed() + randomSeed()  + randomSeed();

		}
	
		else if(emptyCases() == 3) {
		
			document.getElementById("rack").innerHTML += randomSeed() + randomSeed() + randomSeed();

		}
	
		else if(emptyCases() == 2) {
		
			document.getElementById("rack").innerHTML += randomSeed() + randomSeed();

		}
	
		else if(emptyCases() == 1) {
		
			document.getElementById("rack").innerHTML += randomSeed();

		}
		
		else {
		
		// backup rack in case game is rejected 
		
	$.ajax({
		type: "POST",
		url: "../scripts/scrabble/rackBackuper.php",
		data: {
			gameFolder: sessionStorage.getItem("gameStatus"),
			rack: $("#rack").html(),
			username: localStorage.getItem("accountInformation")
		},
		cache: false
	});
	
}

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

	});
	
	}
	
// random seed method
	
function randomSeed() {

	var randomNumber = Math.floor(Math.random() * (27 - 1  + 1) * 1);
	
	return '<div class="seed"> <label class="letter">' +  letterSelection[randomNumber].letter + '</label> <br> <label class="point">' + letterSelection[randomNumber].point + '</label> </div>';

}

// empty cases method

function emptyCases() {

	return  7 - $(".seed").length;
	
}
		
// load participants on title Bar

	var participantsArrayScript = '<script src="../session/' + sessionStorage.getItem("gameStatus") + '/participantsArray.js"></script>';
	
	$("body").append(participantsArrayScript);
	
	// load participants on title Bar
	 		
	var x  =  0;
	
	var participantsOnArray = "";
	
	while(x < participantsArray.length) {
	
		participantsOnArray += '<div class="eachParticipant"> <img class="eachParticipantPicture"></img> <br> <span class="eachParticipantName">' + participantsArray[x] + '</span> </div>';
		
		x++;
	
	}
	
	$("#participantsBar").html(participantsOnArray);
	
	
	
// display contest button depending on result from loaded contestant 
	
	// load contestant at intervals 

	setInterval(function() {
	 		
		$("#contestant").load("../session/" + sessionStorage.getItem("gameStatus") + "/contestant.txt", function() {

			if($("#contestant").html() == localStorage.getItem("accountInformation")) {
			
				$("#btnContest").css("display", "block");
			
			}
			
			else {
			
				$("#btnContest").css("display", "none");
			
			}
			
		// display current contestant for everyone by looping through each participant on heading 
		
			// only works when nobody contested
			
			if(showContestants == true)  {
			
				var eachParticipantLength = $(".eachParticipant").length;
			
				var x = 0;

				while(x < eachParticipantLength) {
				
					var name = $(".eachParticipant .eachParticipantName").eq( x ).html();
					
				// check if trimmed name matches that of current participants file which has been loaded in contestants file
					
					if(name.trim().toLowerCase().replace(/ /g, "")  == $("#contestant").html()) {
					
				// if so display to everyone 
				
						$(".eachParticipant").css("border", "0px solid");
			
						$(".eachParticipant").eq(x).css("border", "5px solid orange");
			
					}
					x++;
					
				}
				
			}
				
		// deactivate contestIsOn the moment contest element has a value
		
				if($("#contestant").html() !== "") {
				
					contestIsOn = true;
				
				}
				
				else {
				
					contestIsOn = false;
				
				}
			
		});
	
	}, 200);
	
	
// display search button depending on result from loaded contestant checker and also for the host when a contest is going on 
	
	// load contestantChecker at intervals 
	
setInterval(function() {

		$("#myContestantChecker").load("../session/" + sessionStorage.getItem("gameStatus") + "/contestants/" + localStorage.getItem("accountInformation") + ".txt", function() {
		
//	if user contests display search icon
	
			if($("#myContestantChecker").html() == "true") {
				
				$("#searchIcon").css("display", "block");
			
			}
			
// else if user does not contests and he is not the host
			
			else if($("#myContestantChecker").html() == "true" && localStorage.getItem("accountInformation") !== $(".eachParticipant").eq(0).children(".eachParticipantName").html().trim().toLowerCase().replace(/ /g, "")) {
			
				$("#searchIcon").css("display", "none");
			
			}
			
			else {}
		
		});
		
// display search icon for host as soon as someone contests

	// if person is host and someone contests display search icon

		if(localStorage.getItem("accountInformation") == $(".eachParticipant").eq(0).children(".eachParticipantName").html().trim().toLowerCase().replace(/ /g, "") && someoneContested == true) {
		
			$("#searchIcon").css("display", "block");
			
		}
		
	// else if person is host and someone hasnt contests display search icon

		else if(localStorage.getItem("accountInformation") == $(".eachParticipant").eq(0).children(".eachParticipantName").html().trim().toLowerCase().replace(/ /g, "") && someoneContested == false) {
		
			
		
		}
			
}, 1000);

		
// display player on heading
	
	setInterval(function() {
	
	// work only when no contest is going on
	
	if(contestIsOn !== true) {
	
	// loop through each player to find current player
	 		
			var eachParticipantLength = $(".eachParticipant").length;
			
			var x = 0;

			while(x < eachParticipantLength) {
			
	//		alert(Number($("#currentPlayer").html()));
			
			if(participantsArray.indexOf($(".eachParticipant .eachParticipantName").eq(x).html()) == $("#currentPlayer").html()) {
				
					$(".eachParticipant").css("border", "0px solid");
				
					$(".eachParticipant").eq(x).css("border", "5px solid green");
				
			}
			
				x++;
			
			}
			
		}
	
	}, 500);
	