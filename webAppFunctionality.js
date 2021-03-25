//Automatic Slideshow - change image every 3 seconds
//var urls = ['https://www.youtube.com/embed/J3svfiJvyb0', 'https://www.youtube.com/embed/R0cAiT5Y7BY'];
//var pos = 0;

//setTimeout(next(), 5000);
//function next()
//{
//  if(pos == urls.length) pos = 0; // reset the counter
//  document.getElementById('rotate').src = urls[pos];
//  pos++;
//}

function recommendVideo() {

	var user_input = document.getElementById("user_input").value;
  console.log('https://wenxis-youtube-recommendation-system.ishmaelrico.repl.co/recommendVideo/'+user_input);
	$.ajax({
		url: 'https://wenxis-youtube-recommendation-system.ishmaelrico.repl.co/recommendVideo/'+user_input, 
    success: function(result) {
			$("#result_label").text(result);
    },
    error: function(data) {
      console.log(data);
    }
	});

}