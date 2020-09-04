const express = require('express');
const port = 4000;
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

module.exports = app;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//IMPORT ROUTES
const listRoute = require('./routes/list.route');
const userRoute = require('./routes/user.route');


app.use('/list', listRoute, () => {
    console.log("mid2");
});

app.use('/api/users', userRoute, (req, res) => {
    //console.log(res);
});

//MIDDLEWARE
app.use('/mid', () => {
    console.log("mid");
});


//ROUTES
app.get('/api/count', (req, res) => {
    res.json({ count });
});


app.post('/api/increment', (req, res) => {
    count = count + parseInt(req.body.increment);
    //console.log(parseInt(req.body.increment));
    res.json({ count });
});



//DATABASE
mongoose.connect(process.env.DB_CONNECTION, 
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true 
    }, () => 
    console.log("Connected to DB")
);

app.listen(port, () => {
    console.log(`API available at http://localhost:${port}/api`);
});
