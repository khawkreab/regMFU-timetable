
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Mejor = Schema({

    majorname:String

})


module.exports = mongoose.model('mejor', Mejor);