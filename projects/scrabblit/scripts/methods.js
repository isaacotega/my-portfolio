var toastBar = $('<div id="toastHolder"> <button id="toast"></button> </div>');
	 	
$("body").append(toastBar);

function toast(text) {

	$("#toastHolder #toast").html("<label>" + text + "</label>");

	$("#toastHolder #toast").css("opacity", "0.9");
	
	setTimeout(function() {
	
		$("#toastHolder #toast").css("opacity", "0");
	
	}, 2000);

}
