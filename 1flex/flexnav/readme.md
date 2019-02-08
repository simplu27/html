# Flexbox Responsive Navigation

[Flexbox Responsive Navigation](https://simplu27.github.io/htmlx/1flex/flexnav)

### HTML

```html
<section id="top-header">
	<div class="centered">

		<nav id="nav">

			<div id="logo">Flexbox Nav</div>

			<!-- Toggle with class .menu-close -->
			<div id="nav-icon"></div> 

			<ul id="menu">
				<li><a href="#!">Home</a></li>
				<li><a class="active-link" href="#!">Portfolio</a></li>
				<li><a href="#!">Blog</a></li>
				<li><a href="#!">Services</a></li>
				<li><a href="#!">Contact</a></li>
			</ul>

		</nav><!-- #nav -->

	</div><!-- centered -->
</section><!-- #top-header -->
```
### JS

```javascript
<script type="text/javascript">
	let topNav = document.getElementById('menu'); // ul#menu
	let menuIcon = document.getElementById('nav-icon'); // #nav-icon
	menuIcon.addEventListener('click', function(){
		// ul#menu add class .menu-active [ul#menu.menu-active]
		topNav.classList.toggle('menu-active');
		// change menu icon from menu-bars.svg to menu-close.svg (in CSS background)
		menuIcon.classList.toggle('menu-close');
	});
</script>
```

### CSS

```css
/* Navigation Flexbox */

*, *:before, *:after {
	margin: 0;
	box-sizing: border-box;
}

body {
	font-family: 'Open Sans', Arial, sans-serif;
	font-size: 16px;
	line-height: 1.4;
	background: #fff;
	color: #333;
}

section#top-header {
	/* Change here will change all menu colors */
	background: #efecdc;
}

.centered {
	/* Just for testing */
	max-width: 1024px;
	margin: 0 auto;
}

#nav {
	display: flex;
	min-height: 70px;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}

#logo {
	color: #333;
	margin: 20px;
	font-size: 28px;
	font-weight: 600;
	line-height: 38px;
	letter-spacing: -1px;
}

#nav-icon {
	/*background: rgba(0,0,0,.2);*/
	color: #fff; display: none;
	width: 42px;
	height: 42px;
	padding: 10px;
	cursor: pointer;
	background-image: url(img/menu-bars.svg);
}

#nav-icon:hover {
	background-color: rgba(250,250,250,.9);
}

#nav-icon,
#nav-icon.menu-close {
	background-repeat: no-repeat;
	background-position: center center;
	/*background-size: 38px 38px;*/
	background-size: contain;
	transition: all .3s;
}

/* Class .menu-close will be added with JS, on click */
#nav-icon.menu-close {background-image: url(img/menu-close.svg);}

ul#menu {
	display: flex;
	list-style: none;
	padding: 0;
	margin-right: 20px;
	color: #fff;
}

ul#menu a {
	display: inline-block;
	text-decoration: none;
	padding: 10px 16px;
	color: #333;
	transition: all .3s;
	border-radius: 4px;
}

ul#menu a.active-link,
ul#menu a:hover {
	background: rgba(0,0,0,.21);
	color: #fff;
}

/* Media Query 720px */

@media screen and (max-width: 720px) {

	#nav-icon {
		display: block;
		margin: 20px;
	}

	ul#menu {
		flex-basis: 100%;
		display: none; /* Hide when is not active */
		flex-direction: column;
		margin-right: 0;
		background: rgba(0,0,0,.03);
	}

	ul#menu.menu-active {
		display: flex; /* Show de menu with JS, onClick */
	}

	ul#menu li {display: block;}
	ul#menu a {
		display: block; 
		border-top: 1px solid rgba(0,0,0,.05);
		border-bottom: 1px solid rgba(250,250,250,.05);
		border-radius: 0;
		padding-left: 20px;
		position: relative;
	}

	ul#menu a.active-link {
		padding-left: 14px;
		border-left: 6px solid rgba(0,0,0,.2);
	}

} /* 720px media end */
```

### ICONS
#### menu-bars.svg

```html
<?xml version="1.0" encoding="iso-8859-1"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Two-Tone" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="60px" height="60px">
<line style="fill:none;stroke:#333333;stroke-width:3;stroke-miterlimit:10;" x1="2" y1="12" x2="22" y2="12"/>
<line style="fill:none;stroke:#333333;stroke-width:3;stroke-miterlimit:10;" x1="2" y1="6" x2="22" y2="6"/>
<line style="fill:none;stroke:#333333;stroke-width:3;stroke-miterlimit:10;" x1="2" y1="18" x2="22" y2="18"/>
</svg>
```

#### menu-close.svg

```html
<?xml version="1.0" encoding="iso-8859-1"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="60px" height="60px">
<g id="Outlined">
	<line style="fill:none;stroke:#333333;stroke-width:4;stroke-miterlimit:10;" x1="4" y1="4" x2="20" y2="20"/>
	<line style="fill:none;stroke:#333333;stroke-width:4;stroke-miterlimit:10;" x1="20" y1="4" x2="4" y2="20"/>
</g>
</svg>
```

