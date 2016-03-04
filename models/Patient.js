/**
 * Created by zizhouzhai on 2/28/16.
 */
var mongoose = require('mongoose');

var patientSchema = new mongoose.Schema({
    name: String,
    phone_number: String, /* or Number */
    email: String,
    id: String,
    checkinTime: Date,
    checkoutTime: Date,
    subdomainurl: String
});

module.exports = mongoose.model('Patient', patientSchema);