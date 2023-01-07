$(document).ready(function () {

	// Old solution: get current height of page
	// var body = document.body;
    // var html = document.documentElement;
	//var total_height = Math.max( body.scrollHeight, body.offsetHeight, 
		// html.clientHeight, html.scrollHeight, html.offsetHeight );
	// $(".menu-overlay").css("height", total_height);
		
	// hide mobile nav elements
	$(".menu-overlay").css("display", "none");
	$("nav.navigation.mobile").css("display", "none");
	
	// open mobile menu
	$("#open.toggle-btn").click(function (e) { 
		e.preventDefault();
		
		$("nav.navigation.mobile").show('slide', {direction: 'right'}, "slow");
		$(".menu-overlay").show('slide', {direction: 'right'}, "slow");
	});

	// close mobile menu
	$("#close.toggle-btn").click(function (e) { 
		e.preventDefault();
		
		$("nav.navigation.mobile").hide('slide', {direction: 'right'}, "slow");
		$(".menu-overlay").hide('slide', {direction: 'right'}, "slow");
	});
});