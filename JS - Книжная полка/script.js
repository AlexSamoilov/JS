var books = {};

$(document).ready(function() {
	$('#modal-add-book-ok').on('click', addBookToLibrary);
});

function addBookToLibrary() {
	var formData = $('form').serializeArray();
	console.log(formData);
	var newArray = [];
	for (key in formData){
		newArray[formData[key]['name']] = formData[key]['value'];
	}
	console.log(newArray);
	var randomArticle = Math.round(Math.random()*100000);
	books[randomArticle] = newArray;
	console.log(books);
}