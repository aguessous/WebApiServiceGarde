const mongoose = require('mongoose');

const PrestationSchema = mongoose.Schema({
    intitule: String,
    prix: Number,
    date: String,
    etatPrestation:String,
    create_date : {type: Date, default:Date.now}
});

module.exports = mongoose.model('Prestation', PrestationSchema);