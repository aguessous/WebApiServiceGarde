const Enfant = require('../models/enfant.model.js');


// POST one
exports.create = (req, res) => {
    // Create a Customer
    const enfant = new Enfant({
        nomEnfant:req.body.nomEnfant,
        prenomEnfant:req.body.prenomEnfant,
        dateNaissanceEnfant:req.body.dateNaissanceEnfant,
        sexeEnfant:req.body.sexeEnfant,
        classeEnfant:req.body.classeEnfant
       
    });

    // Save it in the MongoDB
    enfant.save()
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
    Enfant.find()
    .then(enfants => {
        res.send(enfants);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


// FIND one
exports.findOne = (req, res) => {
    var id = req.params.enfantId;
    Enfant.findById(id)
    .then(enfant => {
        if(!enfant) {
            return res.status(404).send({
                message: "Not found with id " + id
            });            
        }
        res.send(enfant);
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
    var id = req.params.enfantId;
    Enfant.findByIdAndUpdate(id, {
        nomEnfant:req.body.nomEnfant,
        prenomEnfant:req.body.prenomEnfant,
        dateNaissanceEnfant:req.body.dateNaissanceEnfant,
        sexeEnfant:req.body.sexeEnfant,
        classeEnfant:req.body.classeEnfant
        
    }, {new: true})
    .then(enfant => {
        if(!enfant) {
            return res.status(404).send({
                message: "Not found with id " + id
            });
        }
        res.send(enfant);
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
    var id = req.params.enfantId;
    Enfant.findByIdAndRemove(id)
    .then(enfant => {
        if(!enfant) {
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