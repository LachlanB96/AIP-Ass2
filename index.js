const express = require('express');
const port = 4000;
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

module.exports = app;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//IMPORT ROUTES
const userRoute = require('./routes/user.route');
const favourRoute = require('./routes/favour.route');


app.use('/api/users', userRoute, (req, res) => {
    //console.log(res);
});

app.use('/api/favours', favourRoute, (req, res) => {
    //console.log(res);
});

app.use(express.static('client/build'));

//DATABASE
mongoose.connect(
    process.env.DB_PROTOCOL + '://' +
    process.env.DB_USER + ':' +
    process.env.DB_PASS + '@' +
    process.env.DB_ADDR + '/' +
    process.env.DB_STORE + '?' +
    process.env.DB_PARAMS,
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true 
    }, () => 
    console.log("Connected to DB")
);


app.listen(process.env.PORT || 4000)
