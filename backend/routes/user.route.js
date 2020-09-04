const express = require('express');

const router = express.Router();

let shoppingList = ['Apples, Bananas'];

const User = require('../models/user.model');

//GET ALL ITEMS
router.get('/', async (req, res) => {
    try {
        users = await User.find();
        res.json({ users });
    } catch {
        res.send(err);
    }
})

//SEARCH FOR USER
router.get('/:username', async (req, res) => {
    const user = await User.findOne({ 'username': req.params.username });
    res.json(user);
})

//get admin status of user
router.get('/getStatus/:username', async (req, res) => {
    const user = await User.findOne({ admin: true });
    res.json(user);
})

//Add user
router.post('/add', async (req, res) => {
    const user = await new User({
        username: req.body.username,
        password: req.body.password,
        admin: req.body.admin
    });
    user.save()
        .then(data => {
            //console.log(data);
        })
        .catch(err => {
            res.json(err);
        });
    res.json({ success: 'true' });

});


//DELETE USER
router.delete('/deleteID/:userID', async (req, res) => {
    const user = await User.deleteOne({ '_id': req.params.userID });
    res.json(user);
})

router.delete('/delete/:username', async (req, res) => {
    const user = await User.deleteOne({ 'username': req.params.username });
    res.json(user);
})

module.exports = router;

// http://localhost:3000/api/users/add?username=lachlanb&password=pass&admin=true