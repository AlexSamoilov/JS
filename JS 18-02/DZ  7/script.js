// Домашка: сделать игру, в которой падают предметы сверху экрана, а с помощью кубика
// мы их ловим, кубик может двигаться только горизонтально внизу экрана!

document.addEventListener('DOMContentLoaded', function() {

// main Variables

var step = 0;
var speedLevel = 0;

// platform

var gamePlatform = document.querySelector('.platform');

document.onmousemove = function(){ 
gamePlatform.style.left = event.clientX + 'px';
}; 

// create new element

var	elem = document.createElement('div', '');

elem.style.position = 'absolute';
elem.style.width = 20+'px';
elem.style.height = 20+'px';
elem.style.backgroundColor = 'red';

// random

function getRandomInRange(min, max) {
  return Math.floor(Math.random()*(max-min+1))+min;
}

// game loop

function gameLoop () {

	// random left

	var randomLeft = getRandomInRange(0, screen.width);
	elem.style.left = randomLeft + 'px';

	// add Element

	document.querySelector('.game-zone').appendChild(elem);

	// move Element 

	function moveElem () {
		elem.style.top = step+'px';
		step = step + 10;
	}

	var goElem = setInterval(moveElem, 100); 

}
	
new gameLoop ();

});
