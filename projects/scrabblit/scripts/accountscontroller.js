//signup form submit handler

$("#signupForm").submit(function() {

//ensure name hasn't been taken or prevent form submission 
	 
	 if(accountsArray.indexOf($("#username").val()) !== -1) {
	 
	 toast("Someone has already registered using the information you provided");
	 
	 event.preventDefault();
	 
	 }
	 
	 else {
	 
	 //fill date and create name variable
	
	 	$("#date").val(new Date().toString().substr(0, 15));
	 
	  		localStorage.setItem("scrabblitUsername", $("#username").val());
			
	  		localStorage.setItem("accountInformation", $("#username").val().trim().toLowerCase().replace(/ /g, ""));
			
	 }
	 
	});
	
	//login button click handler

$("#loginButton").click(function() {

//checks if name exists in accounts
	 
	 if(accountsArray.indexOf($("#loginUsername").val()) == -1) {
	 
	 //if it does not
	 
		 toast("No account exists with this information");
	 
	 }
	 
	 //but if it does
	 
	 else {
	 
 //checks if password exists in password array
	 
	  	if(passwordArray.indexOf($("#loginPassword").val()) !== -1) {
	  	
	//if it does then check if name and password indexes are the same
	 
	  		if( passwordArray.indexOf($("#loginPassword").val()) == accountsArray.indexOf($("#loginUsername").val()) ) {
	  		
	  	//if the same sets name variable and username to DOM and return to previous page
	  	
	  		localStorage.setItem("accountInformation", $("#loginUsername").val().trim().toLowerCase().replace(/ /g, ""));
			
	  		localStorage.setItem("scrabblitUsername", $("#loginUsername").val());
			
	 		returnToPreviousPage();
	  		
	  		}
	  		
	  		else {
	  		
	  	//if they are not the same indexes
	 
	 		toast("No account exists with this information");
	 
	 		}
		
		}
		
	  		else {
	  	
	  	//if password do not match any in the accounts 
	 
	 		toast("No account exists with this information");
	 
	 		}
		
	 		
	 }
	 
});
	
	