const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const studentSchema = new Schema ({

    stdname: {type: String, required: true},
    intituteName: {type: String, required: true},
    fee: {type: String, required: true, default: "Unpaid"},
    eventname: {type: String, required: true},
    number:{type: String, required: true},
    date: {
        type: Date, required: true
    },
},{
    timestamps: true,
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student