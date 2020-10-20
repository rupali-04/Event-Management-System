const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
},
{
    timestamps: true,
}

);

const eventtype  = mongoose.model('Eventtype', eventSchema);


module.exports = eventtype;


