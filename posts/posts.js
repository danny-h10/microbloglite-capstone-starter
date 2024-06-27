"use strict";


window.onload = () => {

    getPostsAsyncExample();

}



function getLoginData() {
    const loginJSON = window.localStorage.getItem("login-data");
    return JSON.parse(loginJSON) || {};
}


const getPostsAsyncExample = async () => {
    try {

        const loginData = getLoginData();

        const response = await fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", {
            method: "GET",
            headers: {
                // This header is how we authenticate our user with the
                // server for any API requests which require the user
                // to be logged-in in order to have access.
                // In the API docs, these endpoints display a lock icon.
                Authorization: `Bearer ${loginData.token}`
            }
        })

        const data = await response.json();
        //do something with the posts
        console.log(data, "using async/await")

        // document.querySelector("#postsContainer").innerHTML = JSON.stringify(data)
        const postsContainer = document.getElementById('postsContainer');

        for (const post of data) {
            const postElement = document.createElement('div');
            postElement.className = 'post';

            const postContent = `
            <h3>${post.text}</h3>
            <p class="author"><strong>@</strong> ${post.username}</p>
            <p class="timestamp"><strong>Date:</strong> ${new Date(post.createdAt).toLocaleString()}</p>
             `;

            postElement.innerHTML = postContent;
            postsContainer.appendChild(postElement);
        }
    } catch (error) {
        console.error('Error:', error);
    }

}



function logout() {
    const loginData = getLoginData();

    // GET /auth/logout
    const options = {
        method: "GET",
        headers: {
            // This header is how we authenticate our user with the
            // server for any API requests which require the user
            // to be logged-in in order to have access.
            // In the API docs, these endpoints display a lock icon.
            Authorization: `Bearer ${loginData.token}`,
        },
    };

    fetch(apiBaseURL + "/auth/logout", options)
        .then(response => response.json())
        .then(data => console.log(data))
        .finally(() => {
            // We're using `finally()` so that we will continue with the
            // browser side of logging out (below) even if there is an 
            // error with the fetch request above.

            window.localStorage.removeItem("login-data");  // remove login data from LocalStorage
            window.location.assign("/");  // redirect back to landing page
        });
}
