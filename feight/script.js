// Feight 2018

	// Arata dimensiunea ferestrei, in px, in coltul stanga jos
	// Source: https://gist.github.com/bohman/1351439
	function showViewPortSize(display) {
		if(display) {
			var height = jQuery(window).height();
			var width = jQuery(window).width();
			jQuery('body').prepend('<div id="viewportsize" style="z-index:9999;position:fixed;bottom:10px;left:10px;color:#fff;background:rgba(0,0,0,.3);padding:4px 8px">'+ width+' x '+height+'</div>');
			jQuery(window).resize(function() {
				height = jQuery(window).height();
				width = jQuery(window).width();
				jQuery('#viewportsize').html(width+' x '+height);
			});
		}
	}
	// Seteaza False, ca sa nu arate
	showViewPortSize(true);


// Responsive menu Freight 2018

// document.querySelector('#ham').addEventListener('click', menuResponsive);

function menuResponsive() {
	
	var x = document.getElementById("navigation");
	// Adauga clasa "responsive"
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}

	// Toggle class: ham-icon, close-icon
	var ham = document.getElementById('ham');
	ham.classList.toggle('ham-icon');
	ham.classList.toggle('close-icon');

} // menuResponsive
