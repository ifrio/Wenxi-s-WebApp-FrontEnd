function predict() {

	var user_input = $("#user_input").val();

	$.ajax({

		url: "https://saddlebrowntalldemos.wenxigao.repl.co/prediction/" + user_input, success: function(result) {

			$("#result").text(result);

	}

	});

}