$(document).ready(function(){  

	var ham = $('#ham');
	var nav = $('nav');

	nav.removeClass('open');

	ham.click(function(){
		$('#ham i').toggleClass('fa-bars fa-times');
		if (nav.hasClass('open')) {
			nav.removeClass('open');
		} else {
			nav.addClass('open');
		}
	});

});  //end document ready