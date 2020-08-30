const express = require('express');

const router = express.Router();

let shoppingList = ['Apples, Bananas'];

const ListItem = require('../models/list.model');

//GET ALL ITEMS
router.get('/', async (req, res) => {
    try {
        shoppingList = await ListItem.find();
        res.json({shoppingList});
    } catch {
        res.send(err);
    }
})

//SEARCH FOR ITEM
router.get('/:itemName', async (req, res) => {
    const item = await ListItem.findOne({'item': req.params.itemName});
    res.json(item);
})

//get price of item
router.get('/getPrice/:itemName', async (req, res) => {
    const item = await ListItem.findOne({item: req.params.itemName});
    res.json(item.price);
})

//DELETE ITEM
router.delete('/delete/:itemName', async (req, res) => {
    const item = await ListItem.remove({item: req.params.itemName});
    res.json(item);
})

//UPDATE ITEM
router.patch('/update/:itemName', async (req, res) => {
    const item = await ListItem.updateOne({item: req.params.itemName}, { $set: {price: 2.12}});
    res.json(item);
})

router.get('/Cookies', (req, res) => {
    shoppingList.push('Cookies');
    res.send(shoppingList);
})

router.post('/add', async (req, res) => {
    const listItem = await new ListItem({
        item: req.body.grocery,
        price: 0.123
    });
    listItem.save()
    .then(data => {
        //console.log(data);
    })
    .catch(err => {
        res.json(err);
    });
    res.json({success: 'true'});
    
});

module.exports = router;