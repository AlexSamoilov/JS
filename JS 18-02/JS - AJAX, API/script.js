$(document).ready(function(){
	$.get (
		"http://api.openweathermap.org/data/2.5/weather",
		{
			"id": "706483",  //Kharkiv
			"appid": "ca47f151df29168cba9dd03cac013842"
		},
		function(data) {
			console.log(data);
		}
	);
});

//https://www.youtube.com/watch?v=99IYij4smC0