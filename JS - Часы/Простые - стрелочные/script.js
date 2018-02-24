window.onload = function () {
	//for debugging, time is accelerated.
	setInterval (fSec, 1000/60);
	var sec = 0;
	var min = 0;
	var hrs = 0;
	function fSec() {
		document.querySelector('#sec').style.transform = 'rotate('+sec+'deg)';
		document.querySelector('#min').style.transform = 'rotate('+min+'deg)';
		document.querySelector('#hrs').style.transform = 'rotate('+hrs+'deg)';
		if (sec+6 == 366) {
			sec = 0;
			min = min + 6;
			if (min+6 == 366) {
				min = 0;
				hrs = hrs + 6;
				if (hrs+6 == 366) {
					hrs = 0;
				}
			}
		}
		sec = sec + 6;
	}
}