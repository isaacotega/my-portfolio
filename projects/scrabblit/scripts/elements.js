$(document).ready(function() {

	$("<label></label>").load("../session/" + sessionStorage.getItem("gameStatus") + "/game.txt", function(responseTxt) {
	
		if(responseTxt == "Scrabble") {
		
			loadScrabbleBoard();
		
		}
		
		else if(responseTxt == "Whot") {
		
			loadWhotBoard();
		
		}
	
	});
	
	function loadScrabbleBoard() {

		$("head").prepend('<link rel="stylesheet" href="../styles/templates.css"> <link rel="stylesheet" href="../styles/scrabble/gameboard.css">');
			
		$("body").html('<div class="header">  <img src="../images/scrabble/logo.jpg" id="logo"></img> <label class="heading">Scrabble</label> <div id="refresh" class="headIcon"> <img src="../images/refresh.jpg" class="headIcon"></img> </div>   <a href="../join-game"> <img src="../images/home.png" class="headIcon" id="homeIcon"></img> </a>  <a href="../join-game?stage=dashboard"> <img src="../images/dashboard.jpg" class="headIcon" id="dashboardIcon"></img> </a> <img src="../images/search.jpg" class="headIcon" id="searchIcon"></img> <div id="secondHeader"> <div id="participantsBar"></div> <div id="contestHolder"> <button id="btnContest">Contest</button> </div>  </div> <div class="header" id="searchBar">	<img id="imgSearchEngine"></img>	<input id="inpSearch" placeholder="Search for contested word" type="search">  <label id="closeSearch">x</label> </div>   </div>   <br><br><br><br><br><br><br><br><br><br><br>	<table id="gameBoard"></table> <div id="rack"></div> <button id="submitGame">Play</button>	<div id="searchPortHolder"> <iframe id="searchPort"></iframe>	</div>	<div id="divAcceptSeed">	<br><br>	<label>Correct?</label> <br><br><br><br> <button id="acceptSeedNo">No</button> <button id="acceptSeedYes">Yes</button> </div> <p class="hidden" id="gameStatus"></p> <p class="hidden" id="currentPlayer"></p> <p class="hidden" id="contestant"></p> <p class="hidden" id="contestantChecker"></p> <p class="hidden" id="myContestantChecker"></p> <p class="hidden" id="hostResult"></p> <script src="../scripts/scrabble/methods.js"></script> <script src="../scripts/scrabble/index.js"></script> <script src="../scripts/scrabble/gameController.js"></script> <script src="../scripts/scrabble/contestSystem.js"></script> <script src="../scripts/scrabble/loader.js"></script> <script src="../scripts/scrabble/search.js"></script>');
		
	}
	
	function loadWhotBoard() {

		$("head").prepend('<link rel="stylesheet" href="../styles/templates.css"> <link rel="stylesheet" href="../styles/whot/gameboard.css">');
			
		$("body").html('<div class="header">  <img src="../images/whot/logo.jpg" id="logo"></img>  <label class="heading">Whot</label>  <div id="refresh" class="headIcon"> <a href=""> <img src="../images/refresh.jpg" class="headIcon"></img> </a> </div>  <a href="../join-game"> <img src="../images/home.png" class="headIcon" id="homeIcon"></img> </a>  <a href="../join-game?stage=dashboard"> <img src="../images/dashboard.jpg" class="headIcon" id="dashboardIcon"></img> </a>  <div id="secondHeader"> <div id="participantsBar"></div> </div> </div> <br><br><br><br><br><br><br><br><br><br><br><br><br> <div id="myCards"></div><div id="othersCardsHolder"></div> <div id="cardStack"></div> <div id="market"></div> <div id="whotShapesHolder"> <button class="whotShapesSelectors" id="Carpet"> <label class="Carpet"></label> </button>  <button class="whotShapesSelectors" id="Ball"> <label class="Ball"></label> </button>  <button class="whotShapesSelectors" id="Star"> <label class="Star"></label> </button>  <button class="whotShapesSelectors" id="Angle"> <label class="Angle"></label> </button> <button class="whotShapesSelectors" id="Cross"> <label class="Cross"></label> </button> </div> <label id="remark"></label>  <label id="gameStatus"></label> <p class="hidden" id="gameStatus"></p> <p class="hidden" id="currentPlayer"></p> <p class="hidden" id="successivePlayerClearer"></p> <p class="hidden" id="otherCardsLooper"></p> <p class="hidden" id="hiddenCardStack"></p> <p class="hidden" id="marketEligibility"></p>  <p class="hidden" id="firstPlayChecker"> </p>  <p class="hidden" id="cardSelectionIndex"> </p> <p class="hidden" id="command"> </p>  <p class="hidden" id="hiddenCards"> </p> <p class="hidden" id="command"> </p>  <p class="hidden" id="threePicker"> </p> <p class="hidden" id="pickThreeStatus"> </p> <p class="hidden" id="holdOnChecker"> </p> <p class="hidden" id="whotCommandChecker"> </p> <p class="hidden" id="whotShapeChecker"> </p> <p class="hidden" id="currentCommand"> </p>  '); 
		
		$("head").append('<script src="../scripts/methods.js"></script>  <script src="../scripts/whot/index.js"></script> <script src="../scripts/whot/variable.js"></script>  <script src="../scripts/whot/gameController.js"></script> <script src="../scripts/whot/methods.js"></script> <script src="../scripts/whot/commands.js"></script> ');
			
	}
	
});
		