const mongoose = require('mongoose');

const AuthentificationSchema = mongoose.Schema({
    login: String,
    passWord: String,
    droitAcces: String,
   
    create_date : {type: Date, default:Date.now}
});

module.exports = mongoose.model('Authentification', AuthentificationSchema);