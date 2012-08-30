$(function() {
	$(document).ready(function() {
		$.get(
			"/images/get",
			function(photos) {
				
				$.each(photos, function(key, photo) {
					var string =
					"<div class='photo'>" +
					"<img class='thumbnail' src='" + photo.url + "' alt=''>" +
					"<h3>" + photo.title + "</h3>" +
					"<p>" + photo.content + "</p>" +
					"</div>";
					
					$("#photos").append(string);
				});
			}
		);
	});
});