document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
	var polosa = document.getElementById('polosa');
	left = left - 512;
	if (left < -8192) {
		left = 0;
	}
	polosa.style.left = left+'px';
}
