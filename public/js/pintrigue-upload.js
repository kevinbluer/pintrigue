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
					window.alert("replace with jQuery / Twitter success message...use as an example");
				}
				else {
					window.alert("replace with in-browser dialog 'oops'");
				}
			},
			"json"
		).error(function(e, xhr) {
			window.alert("Unable to save: " + e);
		});
		
		/*
		
			// post the tracks list to the tracks endpoint
			$.post(
				"/set/save",
				{
					tracks: tracks
				},
				function(data){

					// display success message
					newAlert('success', 'Set Saved Successfully');
				},
				"json"
			).error(function(e, xhr) {
				window.alert("Unable to save: " + e);
			});
		*/
		
	});
});