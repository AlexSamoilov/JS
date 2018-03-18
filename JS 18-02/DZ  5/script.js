// Сделать картинку которая перемещается по экрану, 
// можно плавно можно нет.

var elem = document.getElementById("elem");
var step = 0;
var id = setInterval(move, 100);
function move () {
	if (step >= 80) {
		step = 0;
	} 
	else {
		step++;
		elem.style.left = step + '%';
		elem.top = step + '%';
	}
}