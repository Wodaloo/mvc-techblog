const commentFormHandler = async function (event) {
	event.preventDefault();
	console.log("commenting");

	const commentBody = document.querySelector('#body-comment').value.trim();

	const postId = document.querySelector('#postId').value.trim();


	if (commentBody && postId) {
		console.log("postId: ", postId);
		const response = await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({ commentBody, postId }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			document.location.replace('/dashboard');
		}
		else {
			alert(response.statusText);
		}
	}
};

document
	.querySelector('#comment-form')
	.addEventListener('submit', commentFormHandler);