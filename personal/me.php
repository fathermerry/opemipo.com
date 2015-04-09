<!DOCTYPE html>
<!--[if IE 8]> 				 <html class="no-js lt-ie9" lang="en" > <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en" > <!--<![endif]-->

<head>
	<meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> <!--320-->
  <title>Father Merry</title>

  
  <link rel="stylesheet" href="css/foundation.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/animate.css">

  <script src="js/scripts/twitter.js"></script>
  <script src="js/vendor/jquery.js"></script>
  <script src="js/scripts/jquery.simple-text-rotator.min.js"></script>


  <script type="text/javascript">
	  $(document).ready(function(){
		$(".textrotate").textrotator({
	        animation: "fade",
	        speed: 1000
	      });
	});
  </script>

</head>
<body>

	<div class="menu">
		<a href="index.html" class="logo"></a>
		<ul class="nav">
			<li><a href="me.php">ABOUT ME</a></li>
			<li><a href="work.html">MY WORK</a></li>
			<li><a href="message.html">MESSAGE ME</a></li>
		</ul>			
	</div>

	<div class="large-9 columns no-padding minfull">
		<div class="hero personal">
		</div>

		<div class="message minfull personal">
			<h1 class="title pre">I love</h1>
			<h1 class="title lg"><span class="textrotate">Design, Architecture, Minimalism, Travel, Sartorial, Booze, Women, Myself, Family, Soccer, Arsenal</span></h1>
			<p class="desc personal">I am a student of OAU, and twenty one years old. I design web products as a job and as a hobby. I also tweet a shitload of crap (and some gems) and collect pictures of menswear on pinterest. I plan to travel more this year and discover Nigeria. I'll share pictures and stuff when I start.</p>

			<ul class="social">
				<li><a target="_blank" href="https://twitter.com/FatherMerry"><i class="fa fa-twitter"></i></a></li>
				<li><a target="_blank" href="http://www.pinterest.com/thatmerrykid/"><i class="fa fa-pinterest"></i></a></li>
				<li><a target="_blank" href="http://themerrykid.tumblr.com/"><i class="fa fa-tumblr"></i></a></li>
			</ul>

			<p class="contactme personal">07087212710<br> hi@themerrykid.com</p>
		</div>
	</div>

	<div id="description" class="maxfull large-3 columns">
		<ul class="activity">
			<li>
				<h3>Currently Reading</h3>
				<div class="book">
					<h3>THE SIGMA PROTOCOL</h3>
					<p>Robert Ludlum</p>
				</div>
			</li>

			<li>
				<h3>Latest Tweet</h3>
				<div id="tweet"></div>
			</li>

			<li>
				<h3>Last saved article</h3>
				<div class="pocket">
					<?php include 'api.php'; ?>
				</div>
			</li>
		</ul>
		</ul>
	</div>

</body>
</html>
