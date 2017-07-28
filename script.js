var toggleCollections = function() {
	var viewMore = "View More";
	var viewLess = "View Less";
	var prev = $("#view").html();
	var next = prev === viewMore ? viewLess : viewMore;
	if(prev === viewMore){
		$(".collections-container").slideDown(500);
	} else {
		$(".collections-container").slideUp(500); 
	}

	$("#view").html(next); 
}

$(document).ready(function(){
	$("#view").click(function(){
		toggleCollections();
	});  

	$(".dropbtn").click(function(){
		$(".dropmenu").slideToggle(500);
	})

})

$(window).resize(function(){
	if($(window).width() <= 630) {
    	$("#view").html("View More");
    	$(".collections-container").slideUp(500); 
	};
	
	if($(".header-section .dropbtn").css("display") === "none"){
		$(".dropmenu").hide();
	}

})