const Prestation = require('../models/prestation.model.js');


// POST one
exports.create = (req, res) => {
    // Create a Customer
    const prestation = new Prestation({
		  intitule: req.body.intitule,
          prix: req.body.prix,
          date: req.body.date,
          etatPrestation: req.body.etatPrestation
        
    });

    // Save it in the MongoDB
    prestation.save()
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
    Prestation.find()
    .then(prestations => {
        res.send(prestations);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


// FIND one
exports.findOne = (req, res) => {
    var id = req.params.prestationId;
    Prestation.findById(id)
    .then(prestation => {
        if(!prestation) {
            return res.status(404).send({
                message: "Not found with id " + id
            });            
        }
        res.send(prestation);
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
    var id = req.params.prestationId;
    Prestation.findByIdAndUpdate(id, {
         intitule: req.body.intitule,
          prix: req.body.prix,
         date: req.body.date,
         etatPrestation: req.body.etatPrestation
    }, {new: true})
    .then(prestation => {
        if(!prestation) {
            return res.status(404).send({
                message: "Not found with id " + id
            });
        }
        res.send(prestation);
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
    var id = req.params.prestationId;
    Prestation.findByIdAndRemove(id)
    .then(prestation => {
        if(!prestation) {
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