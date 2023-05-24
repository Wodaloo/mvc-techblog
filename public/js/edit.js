const editPostFormHandler = async (event) => {
    event.preventDefault();
    console.log("commenting");

    const title = document.querySelector('#title-edit-post').value.trim();
    const body = document.querySelector('#body-edit-post').value.trim();
    const postId = document.querySelector('#postId').value.trim();

    if (title && body && postId) {
        console.log("postId: ", postId);
        const response = await fetch('/api/posts/' + postId, {
            method: 'PUT',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        }
        else {
            alert(response.statusText);
        }
    }
};


const deletePost = async () => {
    console.log("delete post");
    const postId = document.querySelector('#postId').value.trim();
    console.log(postId);
    if (postId) {
        const response = await fetch('/api/posts/', + postId, {
            method: 'DELETE',
            body: JSON.stringify({ postId }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#edit-form')
    .addEventListener('submit', editPostFormHandler);

document.querySelector('#delete-btn')
    .addEventListener('click', deletePost);