// document.onkeypress = function(event) {
// 	console.log(event.Key);
// 	console.log(event);
// 	if (event.shiftKey) {
// 		console.log("нажата клавиша Shift");
// 	}
// }

document.getElementById('test').onkeypress = function(event){
	//console.log(event);
	if (event.keyCode<48 || event.keyCode>57) {
		console.log('не цифра');
		return false;
	}
}