const express = require('express');

const app = express()
const port = 5000

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log("Requested Path: " + req.url);
    next();
})

app.get('/', (req, res) => {
    res.send('Welcome to Homework 3');
})

app.get('/index', (req, res) => {
    res.send('This is index page');
})

app.get('/about', (req, res) => {
    res.send('This is about page');
})

app.get('/communication', (req, res) => {
    res.send('This is communications section');
})

app.use(function(err, req, res, next) {
    console.error(err.stacked);
    res.status(500).send('Problem occured');
})

app.listen(port, () => {
    console.log(`Homework 3 is listened at http://localhost:${port}`)
})