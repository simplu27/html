<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Owl Carousel Proba</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" media="screen" href="owl/carousel.css">
<link rel="stylesheet" media="screen" href="style.css">
</head>
<body>

<div class="center">
	<h2>Owl Carousel 1:</h2>

	<ul id="car1" class="carousel">

		<li><a href="#">
			<img src="imagini/1.jpg" alt="">
			<h3>Ocean beauty</h3>
		</a></li>

		<li><a href="#">
			<img src="imagini/2.jpg" alt="">
			<h3>Night streets</h3>
		</a></li>

		<li><a href="#">
			<img src="imagini/3.jpg" alt="">
			<h3>Ocean Landing</h3>
		</a></li>

		<li><a href="#">
			<img src="imagini/4.jpg" alt="">
			<h3>Beautiful sunset</h3>
		</a></li>

		<li><a href="#">
			<img src="imagini/5.jpg" alt="">
			<h3>Sky Scrapper</h3>
		</a></li>

		<li><a href="#">
			<img src="imagini/6.jpg" alt="">
			<h3>Mountains Target</h3>
		</a></li>

		<li><a href="#">
			<img src="imagini/7.jpg" alt="">
			<h3>Bokeh lights</h3>
		</a></li>
	</ul>
</div><!-- center -->


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
<script src="owl/owl.carousel.js"></script>
<script>
$(document).ready(function(){  

	$("#car1").owlCarousel({
			navigation : true,
			navigationText :["Inapoi","Inainte"],
			responsiveRefreshRate : 50
		});

});  //end document ready
</script>
</body>
</html>