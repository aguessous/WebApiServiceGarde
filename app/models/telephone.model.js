const mongoose = require('mongoose');

const TelephoneSchema = mongoose.Schema({
    numeroTel: String,
    typeTel: String,
    create_date : {type: Date, default:Date.now}
});

module.exports = mongoose.model('Telephone', TelephoneSchema);