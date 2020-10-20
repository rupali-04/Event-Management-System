const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const stdSchema = new Schema({
    stdname: {
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

const std  = mongoose.model('Std', stdSchema);


module.exports = std;


