const express = require('express');
const port = 4000;
const app = express();
const mongoose = require('mongoose');

module.exports = app;

let count = 0;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//IMPORT ROUTES
const listRoute = require('./routes/list.route');
app.use('/list', listRoute, () => {
    console.log("mid2");
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
mongoose.connect('mongodb+srv://lachlan:pass@test.wdram.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true }, () => 
    console.log("Connected to DB")
);

app.listen(port, () => {
    console.log(`API available at http://localhost:${port}/api`);
});
