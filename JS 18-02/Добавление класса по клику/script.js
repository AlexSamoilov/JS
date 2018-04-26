document.onclick = function(event) {
	// console.log('work');
	// console.log(event.target.tagName);
	event = event || window.event; // для старых браузеров
	if (event.target.tagName == 'IMG') {
		event.target.classList.add('bordered');
	}
}
