const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const pageRoute = require('./routes/courseRoute');

//Initializing the express app
const app = express();
//Making our db connection
mongoose.connect(mongoUrl, {
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

//Defining the port number
const port = 5000;

//Launching the app
app.listen(port, () => {
    console.log(`App just started at ${port}`);
})