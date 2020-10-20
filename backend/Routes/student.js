const express = require('express');
const Student = require('../models/students.module');
const { route } = require('./std');
const router = express.Router();
 

router.get('/', (req,res) =>{
    Student.find()
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err))

});


router.post('/add', (req,res) =>{
    const stdname = req.body.stdname;
   const intituteName = req.body.intituteName;
    const eventname = req.body.eventname;
    const fee = req.body.fee;
    const number = req.body.number
    const date = req.body.date;


    const newStudent = new Student
        (
            {
                stdname,
                intituteName,
                eventname,
                fee,
                number,
                date
            }
            
            );

            newStudent.save()
    .then(() => res.json('Student Added!!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/:id', (req,res) => {
    Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Error: ' + err))
})
router.delete('/:id',(req,res) =>
{
    Student.findByIdAndDelete(req.params.id)
    .then(() => res.json("Deleted!!"))
    .catch(err => res.status(400).json('Error:' + err))
})
router.put('/update/:id/',(req,res) =>
{
    Student.findById(req.params.id)
    .then(student => {
        student.stdname = req.body.stdname
        student.instituteName = req.body.instituteName
        student.eventname = req.body.eventname
        student.fee = req.body.fee
        student.number = req.body.number
        student.date = req.body.date
        student.save()
        .then(() => res.json("Students Updated!!"))
        .catch((err) => res.status(400).json('Error ' + err))
    }
    )
})
module.exports = router;