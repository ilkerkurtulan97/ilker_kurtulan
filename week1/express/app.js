const express = require('express');

//Creating express application on port = 5000
const app = express()
const port = 5000

app.use(express.static('public'));

//Using express middleware to log the url
app.use((req, res, next) => {
    console.log("Requested Path: " + req.url);
    //Using next() function to continue other middleware functions
    next();
})

//Opening page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Homework 3</h1>');
})

//Index page
app.get('/index', (req, res) => {
    res.send('<h1>This is index page<h1>');
})

//About page
app.get('/about', (req, res) => {
    res.send('<h1>This is about page<h1>');
})

//Communication page
app.get('/communication', (req, res) => {
    res.send('<h1>This is communications section<h1>');
})

//Error middleware
app.use(function(err, req, res, next) {
    console.error(err.stacked);
    res.status(500).send('Problem occured');
})

//Launching the app and listening from port 5000
app.listen(port, () => {
    console.log(`Homework 3 is listened at http://localhost:${port}`)
})