# Enjoy the Microblog Project and the MicroblogLite API!

Don't forget to read the [*MicroblogLite* API docs](http://microbloglite.us-east-2.elasticbeanstalk.com/docs) and experiment with the API in *Postman!*

Practice and experimentation provide experience, and experience provides confidence.


This Microblog project was to interact with an api and create an account and finally be able to interact with everyones posts almost like twitter.
The Languages used in this project is HTML, CSS, and Javascript along with a few more. the site includes the following folders


<h1>Signup</h1>
<br>
index.html, singup.css, singup.js

<h1>Profile</h1>
<br>
index.html, profile.css, profile.js

<h1>Posts</h1>
<br>
index.html, posts.css, posts.js

<br>

As well as a home page that includes
<br>
index.html, landing.css, landing.js, auth,js
<br>

<h1>Most intersting</h1>
<br>
My most interesting piece of code for me was definitly trying to get the desgin for the posts to work 
main {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}


#postsContainer {
    width: 100%;
    margin-top: 20px;
    background-color: #ffffff;
}

.post {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    overflow-wrap:break-word ;
}


.author {
    font-weight: bold;
}

.timestamp {
    font-style: italic;
}