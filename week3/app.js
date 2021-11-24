const express = require('express');
const mongoose = require('mongoose');

const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute');
const authRoute = require('./routes/authRoute');

//Initializing the express app
const app = express();
//Making our db connection
mongoose.connect('mongodb+srv://admin:q1w2e3r4@cluster0.axghl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    //Setting view engine so our ejs files work.
app.set('view engine', 'ejs');

//Middlewares
//Using this middleware to activate our static files inside public folder
app.use(express.static('public'));
app.use(express.json());
//Routing


app.use('/', pageRoute);
app.use('/course', courseRoute);
app.use('/category', categoryRoute);
app.use('/auth', authRoute);

//Defining the port number
const port = 5000;

//Launching the app
app.listen(port, () => {
    console.log(`App just started at ${port}`);
})