$(document).ready(function(){  

	var ham = $('#ham');
	var nav = $('nav');

	nav.removeClass('open');

	ham.click(function(){
		$('#ham i').toggleClass('fa-bars fa-times');
		if (nav.hasClass('open')) {
			nav.removeClass('open');
			// $(this).html('&#9776;');
		} else {
			nav.addClass('open');
			// $(this).html('&#215;');
		}

		// $('nav').toggleClass('open');
	});

});  //end document ready