document.onkeypress = function(event) {
	console.log(event.Key);
	console.log(event);
	if (event.shiftKey) {
		console.log("нажата клавиша Shift");
	}
}