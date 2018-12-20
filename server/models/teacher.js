
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Teacher = Schema({
  fname: {
    type: String,
    required: [true]
  },
  lname: {
    type: String,
    required: [true]
  },
  office:String,
  picture:String

})


module.exports = mongoose.model('teacher', Teacher);