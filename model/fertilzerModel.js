const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fertilzerSchema = new Schema({
    title: {type:String, required: true},
    paragraph: {type:String, required: true},

})

const Fertilzer = mongoose.model('Fertilzer', fertilzerSchema);

module.exports = Fertilzer;