const express = require('express');

const router = express.Router();


const Favour = require('../models/favour.model');

//GET ALL FAVOURS
router.get('/', async (req, res) => {
    try {
        favours = await Favour.find();
        res.json({ favours });
    } catch {
        res.send(err);
    }
})

//SEARCH FOR FAVOUR
router.get('/:favourID', async (req, res) => {
    const favour = await Favour.findOne({ 'favourID': req.params.favourID });
    res.json(favour);
})

//get admin status of favour
router.get('/getStatus/:favour', async (req, res) => {
    const favour = await Favour.findOne({ admin: true });
    res.json(favour);
})

//Add favour
router.post('/add', async (req, res) => {
    const favour = await new Favour({
        favourID: req.body.favourID,
        creditor: req.body.creditor,
        debtor: req.body.debtor,
        description: req.body.description,
        repaid: req.body.repaid,
        reward: req.body.reward
    });
    favour.save()
        .then(data => {
            //console.log(data);
        })
        .catch(err => {
            res.json(err);
        });
    res.json({ success: 'true' });

});


//DELETE favour
router.delete('/deleteID/:favourID', async (req, res) => {
    const favour = await Favour.deleteOne({ '_id': req.params.favourID });
    res.json(favour);
})

router.delete('/delete/:favour', async (req, res) => {
    const favour = await Favour.deleteOne({ 'favour': req.params.favour });
    res.json(favour);
})

module.exports = router;
