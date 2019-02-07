const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    titreMessage: String,
    corpsMessage: String,
    typeMessage: String,
    destinataireMessage: String,
    create_date : {type: Date, default:Date.now}
});

module.exports = mongoose.model('Message', MessageSchema);