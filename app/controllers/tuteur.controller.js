const Tuteur = require('../models/tuteur.model.js');


// POST one
exports.create = (req, res) => {
    // Create a Customer
    const tuteur = new Tuteur({
        nomTuteur:req.body.nomTuteur,
        prenomTuteur:req.body.prenomTuteur,
        chercherEnfantTuteur:req.body.chercherEnfantTuteur,
        urgenceTuteur:req.body.urgenceTuteur
       
    });

    // Save it in the MongoDB
    tuteur.save()
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
    Tuteur.find()
    .then(tuteurs => {
        res.send(tuteurs);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


// FIND one
exports.findOne = (req, res) => {
    var id = req.params.tuteurId;
    Tuteur.findById(id)
    .then(tuteur => {
        if(!tuteur) {
            return res.status(404).send({
                message: "Not found with id " + id
            });            
        }
        res.send(tuteur);
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
    var id = req.params.tuteurId;
    Tuteur.findByIdAndUpdate(id, {
        nomTuteur:req.body.nomTuteur,
        prenomTuteur:req.body.prenomTuteur,
        chercherEnfantTuteur:req.body.chercherEnfantTuteur,
        urgenceTuteur:req.body.urgenceTuteur
    }, {new: true})
    .then(tuteur => {
        if(!tuteur) {
            return res.status(404).send({
                message: "Not found with id " + id
            });
        }
        res.send(tuteur);
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
    var id = req.params.tuteurId;
    Tuteur.findByIdAndRemove(id)
    .then(tuteur => {
        if(!tuteur) {
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