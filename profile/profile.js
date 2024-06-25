"use strict"

window.onload = () => {

    const addPostForm = document.querySelector("#newPostForm")
    addPostForm.addEventListener("submit", addPost)

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
            window.location.assign("https://www.google.com/");  // redirect back to landing page
        });
}


const addPost = async (event) => {
    event.preventDefault();
    console.log(getLoginData())
    

    let formData = new FormData(event.target);
    let formDataAsObject = Object.fromEntries(formData);

    try {
        const loginData = getLoginData();

        const response = await fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${loginData.token}`,
                    "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(formDataAsObject)
            }
        );
        const newPost = await response.json();

        console.log(newPost)
        console.log(JSON.stringify(formDataAsObject))
    } catch (error) {
        console.log("somethings wrong idiot")
    }
}