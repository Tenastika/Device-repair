<!DOCTYPE html>
<html lang="ru">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

		<title>Device repair</title>

		<link rel="stylesheet" href="css/fonts/style.css">

		{% block styles %}
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/responsive.css" media="(max-width: 1920px)">
		{% endblock %}	
	</head>

	<body id="body">

		{% block blocks %}
		<div class="wrapper">
		{% include 'header/block.php' %}
		</div>

		{% endblock %}
		{% block scripts %}
		<script src="js/script.js"></script>
		{% endblock %}
	</body>
</html>
