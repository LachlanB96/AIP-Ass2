const express = require('express');

const router = express.Router();

let shoppingList = ['Apples, Bananas'];


router.get('/', (req, res) => {
    res.send({shoppingList});
})

router.get('/Cookies', (req, res) => {
    shoppingList.push('Cookies');
    res.send(shoppingList);
})

router.post('/add', (req, res) => {
    shoppingList.push(req.body.grocery);
    console.log(req.body.grocery);
    res.json({shoppingList});
});

module.exports = router;