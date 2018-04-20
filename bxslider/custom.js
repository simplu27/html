$(document).ready(function(){  

	// $('.slider').bxSlider({
	// 	infiniteLoop: true,
	// 	minSlides: 1,
	// 	maxSlides: 4,
	// 	slideWidth: 300,
	// 	shrinkItems: true,
	// 	nextText: "Inainte",
	// 	prevText: "Inapoi",
	// 	touchEnabled: true,
	// 	swipeThreshold: 0,
	// 	responsive: true,
	// });

	$('.gallery').each(function() { // the containers for all your galleries
	    $(this).magnificPopup({
	        delegate: 'a', // the selector for gallery item
	        type: 'image',
	        gallery: {
	          enabled:true
	        }
	    });
	});

	// This will create a single gallery from all elements that have class "gallery-item"
	// $('.xslide').magnificPopup({
	//   type: 'image',
	//   gallery:{
	//     enabled:true
	//   }
	// });

});  //end document ready