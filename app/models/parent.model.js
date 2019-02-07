const Telephone = require('../models/telephone.model.js');
const Authentification = require('../models/authentification.model.js');
const mongoose = require('mongoose'), Schema = mongoose.Schema;

const ParentSchema = mongoose.Schema({
    lienParent:String,
    nomParent:String,
    prenomParent:String,
    courrielParent:String,
    telephones : [{ type: Schema.Types.ObjectId, ref: 'Telephone' }],
    authentification : { type: Schema.Types.ObjectId, ref: 'Authentification' },
    create_date : {type: Date, default:Date.now}
});

module.exports = mongoose.model('Parent', ParentSchema);