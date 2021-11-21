const mongoose = require('mongoose')
const {Schema} = mongoose

const dataSchema = new Schema({
    Name: String,
    RegNo: Number,
    Marks: Number
});

module.exports = mongoose.model('data', dataSchema, 'dataSchema');