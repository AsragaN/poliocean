//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "19 dec 2019 18:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
