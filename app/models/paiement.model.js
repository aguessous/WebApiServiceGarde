const Enfant = require('../models/enfant.model.js');
const Prestation = require('../models/prestation.model.js');

const mongoose = require('mongoose'), Schema = mongoose.Schema;

const PaiementSchema = mongoose.Schema({
    datePaiement:String,
    montantPaiement:String,
    enfant : { type: Schema.Types.ObjectId, ref: 'Enfant' },
    prestations : [{ type: Schema.Types.ObjectId, ref: 'Prestation' }],
    create_date : {type: Date, default:Date.now}
});

module.exports = mongoose.model('Paiement', PaiementSchema);