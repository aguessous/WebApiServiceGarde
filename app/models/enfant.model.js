const Parent = require('../models/parent.model.js');
const Tuteur = require('../models/tuteur.model.js');
const Prestation = require('../models/prestation.model.js');
const Extra = require('../models/extra.model.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const EnfantSchema = mongoose.Schema({
    nomEnfant:String,
    prenomEnfant:String,
    dateNaissanceEnfant:String,
    sexeEnfant:String,
    classeEnfant:String,
    parents : [{ type: Schema.Types.ObjectId, ref: 'Parent' }],
    tuteurs : [{ type: Schema.Types.ObjectId, ref: 'Tuteur' }],
    prestations : [{ type: Schema.Types.ObjectId, ref: 'Prestation' }],
    extras : [{ type: Schema.Types.ObjectId, ref: 'Extra' }],
    create_date : {type: Date, default:Date.now}
});

module.exports = mongoose.model('Enfant', EnfantSchema);