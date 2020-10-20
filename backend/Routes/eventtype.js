const express = require('express')
const router = express.Router();
const Eventtype = require('../models/event.module')
router.get('/', (req,res) => {
    Eventtype.find()
    .then(eventtype =>  res.json(eventtype))
    .catch(err => {
        res.status(400).json("Error" + err)
    })
});

router.post('/add', (req,res) => {
   const eventname = req.body.eventname;
   const newEvent = new Eventtype({eventname});
    newEvent.save()
    .then(() => {
        res.json('Event added!!')
    })
    .catch(err => res.status(400).json('Error: ' + err));
})
router.get('/:id', (req,res) => {
    Eventtype.findById(req.params.id)
    .then(e => res.json(e))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.delete('/:id', (req,res) => {
    Eventtype.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event Deleted!!'))
    .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router;



