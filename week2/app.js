const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const env = require('dotenv');
//Importing database schema
const Post = require('./model/Post');
//Importing controllers
const postController = require("./controller/postController");
const pageController = require("./controller/pageController");


//Creating express app variable
const app = express()
env.config();
const port = process.env.PORT || 3000;

//Creating our database connection
mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected the database");
    })
    .catch((err) => {
        console.log("Error occured: ", err);
    });

//Template engine
app.set('view engine', 'ejs');

//Middlewares
//Lets express know our public folder
app.use(express.static('public'));
//Captures the url data
app.use(express.urlencoded({ extended: true }));
//Helps url data to be formatted in json
app.use(express.json());


const myLogger = (req, res, next) => {
    console.log("Middleware Log 1");
    next();
}

//Routing
app.get("/", postController.getAllPosts);

app.get("/about", pageController.getAboutPage);

app.get("/add_post", pageController.getAddPostPage);

app.get("/post", postController.createPost);

app.get("/posts/:id", postController.getPost);

app.put("/posts/:id", postController.updatePost);

app.delete("/posts/:id", postController.deletePost);

app.get("/posts/edit/:id", pageController.getEditPage);

//Launching the app and listening from port 3000
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda baslatildi...`);
});