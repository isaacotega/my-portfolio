// define application name

var appName = "Scrabblit";

// header template

$(".header").html('<span class="backIcon"> < </span> <label class="heading">' + appName + '</label> <span class="navIcon">&#9776;</span>');	

// define backToGame depending on user game status and manipulate side bar with it 

if(sessionStorage.getItem("gameStatus") !== null)  {

	var backToGame = '<label id="sideLinkBackToGame"> Back to Game</label> <br><br>  <label id="sideLinkDashboard"> Dashboard </label> <br><br> ';
	
}

else {

	var backToGame = '<label id="sideLinkJoinAGame">Join a Game</label> <br><br>';

}

if(localStorage.getItem("accountInformation") !== null)  {

	var accountLink = '<label id="sideLinkLogOut">Log Out</label> <br><br>';
	
}

else {

	var accountLink = '<label id="sideLinkLogin">Log In</label> <br><br>';

}

// define the sidebar HTML

$(".sideNav").html(' <br><br> <label id="sideLinkHome">Home</label> <br><br>  <label id="sideLinkNewGame"> New Game </label> <br><br>' + backToGame + accountLink + ' <label id="sidesideLinkAbout"> About </label> <br><br>  <label id="sideLinkPrivacyPolicy"> Privacy Policy </label> <br><br> <label id="sideLinkFeedback"> Feedback </label> <br><br> <label id="sideLinkShare"> Share </label> <br><br>  <label id="sideLinkHelp"> Help </label> <br><br> ');

// sidelines event listeners

// main links

$("#sideLinkHome").click(function() {

	window.location.href="../join-game";

});

$("#sideLinkNewGame").click(function() {

	window.location.href="../join-game?stage=info";

});

$("#sidesideLinkAbout").click(function() {

	window.location.href="../about";

});

$("#sideLinkPrivacyPolicy").click(function() {

	window.location.href="../privacy-policy";

});

$("#sideLinkFeedback").click(function() {

	window.location="mailto:contact@scrabblit.com";

});

$("#sideLinkShare").click(function() {

	window.location.href="../share";

});

$("#sideLinkHelp").click(function() {

	window.location.href="../help";

});

// variable links

$("#sideLinkBackToGame").click(function() {

	window.location.href="../";

});

$("#sideLinkDashboard").click(function() {

	window.location.href="../join-game?stage=dashboard";

});

$("#sideLinkJoinAGame").click(function() {

	window.location.href="../join-game?stage=join";

});

$("#sideLinkLogOut").click(function() {

	localStorage.removeItem("accountInformation");

	window.location.href="../";
	
});

$("#sideLinkLogin").click(function() {

	window.location.href="../login";
	
});

// sidenav navigation 

var navIsOut = false;

$(".backIcon").click(function() {

	history.back();

});

$(".navIcon").click(function() {

if(navIsOut == false) {

$(this).css("color", "orange");

$(".sideNav").css("width", "40%");

navIsOut = true;

}

else {

$(this).css("color", "white");

$(".sideNav").css("width", "0%");

navIsOut = false;

}

});

// define the horizontal position of the full pages loader

//$(".fullLoader").css("marginLeft", (Number(window.innerWidth) - Number($(".fullLoader").css("width").substr(0,3))) / 2);

$(".fullLoader").css("marginLeft", "42%" );