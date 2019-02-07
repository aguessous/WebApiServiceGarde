const Telephone = require('../models/telephone.model.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const TuteurSchema = mongoose.Schema({
    nomTuteur:String,
    prenomTuteur:String,
    chercherEnfantTuteur:String,
    urgenceTuteur:String,
    telephones : [{ type: Schema.Types.ObjectId, ref: 'Telephone' }],
    create_date : {type: Date, default:Date.now}
});

module.exports = mongoose.model('Tuteur', TuteurSchema);