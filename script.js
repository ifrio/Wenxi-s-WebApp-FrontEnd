function predict() {

	var username = $("#username_input").val();

	$.ajax({

		url: "https://greedyrunnyshareware--sunyu912.repl.co/sentiment/" + business + "/" + location, success: function(result) {

			$("#result_label").text(result);

	}

	});

}