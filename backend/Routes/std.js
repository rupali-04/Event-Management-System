const express = require('express');
const router = express.Router();
const Std = require('../models/std.module')
 

router.get('/', (req,res) =>{
    Std.find()
    .then(std => res.json(std))
    .catch(err => res.status(400).json('Error: ' + err))

});

router.post('/add', (req,res) =>{
    const stdname = req.body.stdname;
    const newstd = new Std({stdname});

    newstd.save()
    .then(() => res.json('Std Added!!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req,res) => {
    Std.findById(req.params.id)
    .then(std => res.json(std))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.delete('/:id', (req,res) => {
    Std.findByIdAndDelete(req.params.id)
    .then(() => res.json('Std Deleted!!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.put('/update/:id', (req,res) => {
    Std.findById(req.params.id)
    .then (std => {

        std.stdname = req.body.stdname
        std.save()
        .then(() => res.json('Std Updated!!'))
    .catch(err => res.status(400).json('Error: ' + err));

    })
})

module.exports = router;