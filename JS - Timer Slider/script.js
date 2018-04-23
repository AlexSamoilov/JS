//left button (if need)
// document.getElementById('slider-left').onclick = sliderLeft;

autoSlider();
var left = 0;
var timer;

function autoSlider () {
	timer = setTimeout (function () {
		var polosa = document.getElementById('polosa');
		left = left - 512;
		if (left < -8192) {
			left = 0;
			clearTimeout(timer);
		}
		polosa.style.left = left+'px';
		autoSlider();
	}, 2000);
}
