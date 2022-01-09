<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

		<title>Device repair</title>

		<link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
		<link rel="stylesheet" href="css/fonts/style.css">

		{% block styles %}
		<link rel="stylesheet" href="libs/fancybox/jquery.fancybox.css">

		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/responsive.css" media="(max-width: 1920px)">
		{% endblock %}	
	</head>

	<body id="body">

		{% block blocks %}
		<div class="wrapper">
			{% include 'header/block.php' %}
			{% include 'main/block.php' %}
			{% include 'gadgets/block.php' %}
			{% include 'company/block.php' %}
			{% include 'orders/block.php' %}
			{% include 'presents/block.php' %}
			{% include 'advantages/block.php' %}
			{% include 'questions/block.php' %}
			{% include 'contacts/block.php' %}
		
		</div>

		{% endblock %}
		{% block scripts %}

		<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
		<script src = "https://code.jquery.com/jquery-3.4.1.min.js"> </script>
		<script src="libs/fancybox/jquery.fancybox.js"></script>

		<script src="js/script.js"></script>
		{% endblock %}
	</body>
</html>
