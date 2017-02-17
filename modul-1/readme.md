## Module 1 :: Article style
#### Desktop view
![Desktop view](desktop.jpg?raw=true "Desktop View for Module 1 Article")

#### Mobile view
![Mobile view](mobile.jpg?raw=true "Mobile View for Module 1 Article")

##### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
<title>Module 1 :: Article</title>
<meta name="description" content="">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- ===========	CSS 	=========== -->
<link href='http://fonts.googleapis.com/css?family=Roboto:100,300,400,900' rel='stylesheet' type='text/css'>
<link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,400i,700,700i" rel="stylesheet"> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" media="screen" href="style.css">
<!--[if lt IE 9]>
<script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js"></script>
<![endif]-->
</head>
<body>

<div class="center">
	<div class="box">
		<div class="box-info">
			<span class="date">13 Nov. 2015</span>
			<span class="tag">wordpress, html</span>
		</div>
		<div class="box-content">
			<h2 class="title">Tools for Developing Accessible Websites</h2>
			<p>Building websites that are accessible can be challenging for developers like myself that have never had to use any assistive technologies. Unlike visual issues such as layout which can be easily seen, accessibility issues can very easily go unnoticed if we don't have the correct tools to test for them.... </p>
		</div>
	</div><!-- box -->

	<div class="box">
		<div class="box-info">
			<span class="date">14 Jan. 2016</span>
			<span class="tag">php, javascript, mysql, css3, seo</span>
		</div>
		<div class="box-content">
			<h2 class="title">The New System Font Stack?</h2>
			<p>A few months ago, I wrote about how you can use system fonts in the browser using the built-in keywords that work with the font shorthand property (see Using System Fonts in the Browser). These keywords can be useful, but they also have some drawbacks, the main one being that...</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore accusantium minus, deserunt temporibus necessitatibus laudantium quo adipisci asperiores natus reiciendis.</p>
		</div>
	</div><!-- box -->

	<div class="box">
		<div class="box-info green-bg">
			<span class="date">17 Feb. 2017</span>
			<span class="tag">html, video, responsive, parallax</span>
		</div>
		<div class="box-content">
			<h2 class="title">Rellax is a mobile-friendly, zero-dependencies parallax library</h2>
			<p>We've benefitted so much from open source projects and developers that we're actively trying to give back and we're starting by releasing our own quirky js code.</p>
			<p></p>
		</div>
	</div><!-- box -->

	<div class="box">
		<div class="box-info">
			<span class="date">24 Mar. 2015</span>
			<span class="tag">wordpress, php, standards, code</span>
		</div>
		<div class="box-content">
			<h2 class="title">PHP Coding Standards</h2>
			<p>Use single and double quotes when appropriate. If you’re not evaluating anything in the string, use single quotes. You should almost never have to escape quotes in a string, because you can just alternate your quoting style.</p>
			<p></p>
		</div>
	</div><!-- box -->

</div><!-- center -->

</body>
</html>
```

##### CSS

```css
/* Background box-info: #FFDB3A */
/* Background box-info: #7CFC00 */

*, *:before, *:after {
	box-sizing: border-box;
}

html {overflow-y: scroll;}

body {
	background: #F5F5F5;
	color: #2F4F4F;
	font-family: 'Droid Serif', Georgia, serif;
	font-size: 16px;
	line-height: 1.5;
}

.center {
	max-width: 800px;
	margin: 50px auto;
	padding: 0 10px;
}

.box {
	background: #FFF;
	display: flex;
	box-shadow: 2px 2px 2px rgba(0,0,0, .06);
	margin: 0 0 50px;
}

.box-info {flex: 1;}
.box-content {flex: 4;}

.box-info,
.box-content {
	padding: 20px;
}

.box-content {
	padding-left: 35px;
	padding-right: 35px;
}

.box-info {
	background: #FFDB3A;
	color: #696969;
	font-size: 14px;
	max-width: 160px;
	text-align: center;
	position: relative;
}


.box-info:after {
	content: "";
	/*background: blue;*/
	position: absolute;
	width: 0;
	height: 0;
	right: 0;
	top: 26px;
	border-style: solid;
	border-color: transparent transparent transparent #FFDB3A;
	border-width: 10px;
	margin-right: -20px;
}

.box-info.green-bg {
	background: #79ad0a;
	color: #F9F9F9;
}

.box-info.green-bg:after {
	border-color: transparent transparent transparent #79ad0a;
}

.box-content .title {
	font-family: 'Roboto', Arial, sans-serif;
	color: #121212;
	margin: 0 0 20px;
	font-weight: 300;
	font-size: 26px;
	line-height: 1.3;
}

.box-content p {
	margin: 0 0 10px;
	letter-spacing: .12px;
}

.box-info span {
	display: block;
	position: relative;
	margin-bottom: 10px;
}

span.date:before,
span.tag:before {
	font-family: 'FontAwesome';
	display: block;
	margin: 0;
}

span.date:before {
	content: "\f017";
}

span.tag:before {
	content: "\f02c";
}

@media screen and (max-width: 640px) {

	.box {
		display: block;
	}

	.box-info {
		max-width: 100%;
	}

	.box-info:after {
		left: 50%;
		top: 100%;
		/*border-color: #FFDB3A transparent transparent transparent;*/
		border-color: #FFDB3A transparent transparent transparent;
		margin-left: -10px;
	}

	.box-info.green-bg:after {
		left: 50%;
		top: 100%;
		/*border-color: #FFDB3A transparent transparent transparent;*/
		border-color: #79ad0a transparent transparent transparent;
		margin-left: -10px;
	}

	.box-info span {
		display: block;
		margin: 0;s
	}

	span.date:before,
	span.tag:before {
		display: inline;
		margin: 0 10px;
	}

	.box-content {
		padding: 40px 30px 30px;
	}

	.box-content .title {
		text-align: center;
	}

} /* 640px media end */
```

