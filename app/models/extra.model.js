
const mongoose = require('mongoose'); 

const ExtraSchema = mongoose.Schema({
    dateExta:String,
    prestationExtra:String,
    heureExtra:String,
    create_date : {type: Date, default:Date.now}
});

module.exports = mongoose.model('Extra', ExtraSchema);