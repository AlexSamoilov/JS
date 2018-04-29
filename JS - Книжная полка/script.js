var book = {};

$(document).ready(function() {
	$('#modal-add-book-ok').on('click', addBookToLibrary);
});

function addBookToLibrary() {
	var formData = $('form').serializeArray();
	console.log(formData);
}