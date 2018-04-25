var pass = '';

document.getElementById('test').onkeypress = function(event) {
	// console.log(event);
	pass = pass + event.key;	
	// console.log(pass);
	// console.log(String.fromCharCode())
	//hidden password - change all on "*"
	// this.value += String.fromCharCode(42);
	//hidden password on random
	this.value += String.fromCharCode(getRandomInt(65, 122));
	return false;
	//code 65-122 it's a-z A-Z
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

