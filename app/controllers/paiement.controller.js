const Paiement = require('../models/paiement.model.js');


// POST one
exports.create = (req, res) => {
    // Create a Customer
    const paiement = new Paiement({
        datePaiement:req.body.datePaiement,
        montantPaiement:req.body.montantPaiement
       
       
    });

    // Save it in the MongoDB
    paiement.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


// FETCH all 
exports.findAll = (req, res) => {
    Paiement.find()
    .then(paiements => {
        res.send(paiements);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


// FIND one
exports.findOne = (req, res) => {
    var id = req.params.paiementId;
    Paiement.findById(id)
    .then(paiement => {
        if(!paiement) {
            return res.status(404).send({
                message: "Not found with id " + id
            });            
        }
        res.send(paiement);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Not found with id " + id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving object with id " + id
        });
    });
};

// UPDATE one
exports.update = (req, res) => {
    // Find and update it
    var id = req.params.paiementId;
    Paiement.findByIdAndUpdate(id, {
        datePaiement:req.body.datePaiement,
        montantPaiement:req.body.montantPaiement
        
    }, {new: true})
    .then(paiement => {
        if(!paiement) {
            return res.status(404).send({
                message: "Not found with id " + id
            });
        }
        res.send(paiement);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Not found with id " + id
            });                
        }
        return res.status(500).send({
            message: "Error updating object with id " + id
        });
    });
};

// DELETE one
exports.delete = (req, res) => {
    var id = req.params.paiementId;
    Paiement.findByIdAndRemove(id)
    .then(paiement => {
        if(!paiement) {
            return res.status(404).send({
                message: "Not found with id " + id
            });
        }
        res.send({message: "Object deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Not found with id " + id
            });                
        }
        return res.status(500).send({
            message: "Could not delete object with id " + id
        });
    });
};