$(function() {
	
	// set the focus of the document
	$(document).ready(function () {
		$("#title").focus();
	});
	
	// submit photo upload
	$("#upload").click(function() {
		
		$.post(
			"/images/upload",
			{
				title: $("#title").val(),
				content: $("#content").val(),
				url: $("#url").val()
			},
			function(data) {
				if (data.status === "ok") {
					window.alert("Image successfully added :)");
				}
				else {
					window.alert("Oops, something went wrong :(");
				}
			},
			"json"
		).error(function(e, xhr) {
			window.alert("Unable to save: " + e);
		});
	});
});