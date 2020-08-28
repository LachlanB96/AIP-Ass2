const express = require('express');
const port = 4000;
const app = express();

module.exports = app;

let count = 0;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/api/count', (req, res) => {
    res.json({ count });
});

app.post('/api/increment', (req, res) => {
    count = count + parseInt(req.body.increment);
    //console.log(parseInt(req.body.increment));
    res.json({ count });
});

app.listen(port, () => {
    console.log(`API available at http://localhost:${port}/api`);
});
