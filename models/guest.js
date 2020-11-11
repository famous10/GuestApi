var mongoose = require('mongoose');

//defining schema
var GuestSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number},
    {
        timestamp:true
    });

    //creating  model
const Guest  = mongoose.model('guests', GuestSchema);  
module.exports = Guest;