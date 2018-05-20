let comments = [];
document.getElementById('comment-add').onclick = function() {
	event.preventDefault();
	let commentName = document.getElementById('comment-name');
	let commentBody = document.getElementById('comment-body');

	let comment = {
		name : commentName.value,
		body : commentBody.value,
		time : Math.floor(Date.now()/1000)
	}

	console.log(comment);
}