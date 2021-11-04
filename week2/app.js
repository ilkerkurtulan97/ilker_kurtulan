const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./model/Photo');
const env = require('dotenv');

env.config();

//Creating express app variable
const app = express()

//Creating our database connection
mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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

//app.use(myLogger);


//Get request routing homepage
/*
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});
*/


//Routing
app.get("/", async(req, res) => {
    const photos = await Photo.find({});
    console.log(photos)
    res.end();
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/add_post", (req, res) => {
    res.render('add_post');
});

app.post("/photos", async(req, res) => {
    await Photo.create(req.body)
    res.redirect('/')
});



//Launching the app and listening from port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda baslatildi...`);
});

/*
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı..`);
});
*/