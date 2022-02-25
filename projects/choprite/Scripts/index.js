
function slideIn() {

document.getElementById("sideNav").style.width = "0%";

}

function openOrderList() {

document.getElementById("orderList").style.height = "99%";

}

function closeOrderList() {

document.getElementById("orderList").style.height = "0%";

}

function showNextBtn1() {

var town = document.getElementById("inpTown").value;

var LGA = document.getElementById("inpLGA").value;

var postalCode = document.getElementById("inpPostalCode").value;

if(town.length > 3 && LGA.length > 3) {

document.getElementById("nextButton").style.display = "block";

document.getElementById("nextButton").style.marginLeft = "35%";

}

}

function next2() {

document.getElementById("nextButton2").style.display = "block";

document.getElementById("nextButton2").style.marginLeft = "35%";

}

function nextPage() {

document.getElementById("order2").style.width = "100%";

}

function nextPage2() {

document.getElementById("order3").style.width = "100%";

}

function checkState() {

var state = document.getElementById("inpState").value;

if(state == "Abia" || state == "Adamawa" || state == "Akwa-Ibom" || state == "Anambara" || state == "Bauchi" || state == "Bayelsa" || state == "Benue" || state == "Borno" || state == "Cross-River" || state == "Delta" || state == "Ebonyi" || state == "Edo" ||state == "Ekiti" || state == "Enugu" || state == "Gombe" || state == "Imo" || state == "Jigawa" || state == "Kaduna" || state == "Kano" || state == "Katsina" || state == "Kebbi" || state == "Kogi" || state == "Kwara" || state == "Lagos" || state == "Nassarawa" || state == "Niger" || state == "Ogun" || state == "Ondo" || state == "Osun" || state == "Oyo" || state == "Plateau" || state == "Rivers" || state == "Sokoto" || state == "Taraba" || state == "Yobe" || state == "Zamfara" || state == "Abuja") {

document.getElementById("furtherLocation").style.display = "block";

}

}

function narrowSelection() {

var meal = document.getElementById("sltMeal").value;

if(meal == "Local Dish") {

document.getElementById("frmLocalDish").style.display = "block";

}

else if(meal == "Intercontinental Dish") {

document.getElementById("frmIntercontinentalDish").style.display = "block";

}

else if(meal == "Snacks") {

document.getElementById("frmSnacks").style.display = "block";

}

else if(meal == "Proteins") {

document.getElementById("frmProtein").style.display = "block";

}

else if(meal == "Local Beverages") {

document.getElementById("frmLocalBeverages").style.display = "block";

}

else if(meal == "Soft Drinks") {

document.getElementById("frmSoftDrinks").style.display = "block";

}

else if(meal == "Alcoholic Beverages") {

document.getElementById("frmAlcoholicBeverages").style.display = "block";

}

else {

document.getElementById("frmDesserts").style.display = "block";

}

}

function prepareMenu() {

if(document.getElementById("imgCart2").style.border == "5px solid blue") {

document.getElementById("imgCart2").style.border = "8px solid white";

}

else {

document.getElementById("imgCart2").style.border = "5px solid blue";

}

var newRow = document.createElement("tr");

//var sn = document.getElement("tr").length;

//var item = this.value;

//var price = "2500";





//var sn  = document.createElement("td");

//sn.innerHTML = document.getElement("tr").length;

//var item = document.createElement("td");

//item.innerHTML = this.value;

//var price = document.createElement("td");

//price.innerHTML = "2500";

//newRow.appendChild(sn + item + price);

//newRow.innerHTML = '<td>' + sn + '</td>' + '<td>' + item + '</td>' + '<td>' + price + '</td>';

document.getElementById("tblBody").appendChild(newRow);

}

