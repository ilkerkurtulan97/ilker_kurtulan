const express = require('express');
//const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');

//Creating express application
const app = express()

const myLogger = (req, res, next) => {
    console.log("Middleware Log 1");
    next();
}

app.use(express.static('public'));
app.use(myLogger);


//Get request routing homepage
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/add_post", (req, res) => {
    res.render('add_post');
});


//Launching the app and listening from port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı..`);
});