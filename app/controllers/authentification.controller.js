const Authentification = require('../models/authentification.model.js');


// POST one
exports.create = (req, res) => {
    // Create a Customer
    const authentification = new Authentification({
		login: req.body.login,
		passWord: req.body.passWord,
		droitAcces: req.body.droitAcces
    });

    // Save it in the MongoDB
    authentification.save()
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
    Authentification.find()
    .then(authentifications => {
        res.send(authentifications);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


// FIND one
exports.findOne = (req, res) => {
    var id = req.params.authentificationId;
    Authentification.findById(id)
    .then(authentification => {
        if(!authentification) {
            return res.status(404).send({
                message: "Not found with id " + id
            });            
        }
        res.send(authentification);
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
    var id = req.params.authentificationId;
    Authentification.findByIdAndUpdate(id, {
        numeroTel: req.body.numeroTel,
		typeTel: req.body.typeTel
    }, {new: true})
    .then(authentification => {
        if(!authentification) {
            return res.status(404).send({
                message: "Not found with id " + id
            });
        }
        res.send(authentification);
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
    var id = req.params.authentificationId;
    Authentification.findByIdAndRemove(id)
    .then(authentification => {
        if(!authentification) {
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