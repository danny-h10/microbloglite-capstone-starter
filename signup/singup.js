"use strict"

window.onload = () => {


    const signUpForm = document.querySelector("#signup")

    signUpForm.addEventListener("submit", signUp)
}

//method/function to sign up form 
//CRUD: (C)reate a user
const signUp = async (event) => {

    //call preventDefault to keep the page from reloading
    event.preventDefault();

    //generate a new form data object
    let formData = new FormData(event.target);

    //generate a JavaScript Object from the formData object created aboveS
    let formDataAsObject = Object.fromEntries(formData);

    //try catch for error handling
    try {

        //make a fetch (POST) request to create a comment in the API
        let response = await fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users",
            {
                method: "POST",
                headers: { "Content-type": "application/json; charset=UTF-8" },
                //take the data from the form and build the body of the request
                body: JSON.stringify(formDataAsObject)
            }
        );
        //turn the response in to something we can work with
        let newUser = await response.json();

        const responseCode = response.status;

        // this is may or may not the best way to handle errors but it covers everything? idk will have to ask
        switch (responseCode) {
            case 201:
                alert("New user created");
                window.location.href = "/"
                break;
            case 400:
                alert("Bad request :L")
                break;
            case 409:
                alert("User Exists");
                break;
        }

    } catch (error) {
        alert("Something went wrong :L");
        console.log(error);
    }
}