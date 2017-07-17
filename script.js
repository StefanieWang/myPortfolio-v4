
var hideCollections = function() {
	if(!$("#hide").hasClass("disabled")){
		$(".collections-container").slideUp(500); 
  		$("#hide").addClass("disabled")
   		$("#view").removeClass("disabled");			
	}
   
}

var showCollections = function() {
	if(!$("#view").hasClass("disabled")){
		$(".collections-container").slideDown(500);
		$("#view").addClass("disabled")
		$("#hide").removeClass("disabled");			
	}
	
}


$(document).ready(function(){
	$("#view").click(function(){
		showCollections();
	});

	$("#hide").click(function(){
		hideCollections();	
	});    

	$(".dropbtn").click(function(){
		$(".dropmenu").slideToggle(500);
	})

})

$(window).resize(function(){
	if($(window).width() <= 630) {
    	hideCollections();
	};
	
	if($(".header-section .dropbtn").css("display") === "none"){
		$(".dropmenu").hide();
	}

})