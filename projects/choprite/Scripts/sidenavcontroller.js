var navIsOut = false;


document.getElementById("sideNavIcon").addEventListener("click", function() {

if(navIsOut == false) {

document.getElementById("sideNav").style.width = "40%";

this.style.color = "red";

navIsOut = true;

}

else {

document.getElementById("sideNav").style.width = "0%";

this.style.color = "white";

navIsOut = false;

}

});

function closeNav() {

document.getElementById("sideNav").style.width = "0%";

}
