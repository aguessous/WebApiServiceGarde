const Telephone = require('../models/telephone.model.js');


// POST one
exports.create = (req, res) => {
    // Create a Customer
    const telephone = new Telephone({
        numeroTel: req.body.numeroTel,
		typeTel: req.body.typeTel
    });

    // Save it in the MongoDB
    telephone.save()
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
    Telephone.find()
    .then(telephones => {
        res.send(telephones);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


// FIND one
exports.findOne = (req, res) => {
    var id = req.params.telephoneId;
    Telephone.findById(id)
    .then(telephone => {
        if(!telephone) {
            return res.status(404).send({
                message: "Not found with id " + id
            });            
        }
        res.send(telephone);
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
    var id = req.params.telephoneId;
    Telephone.findByIdAndUpdate(id, {
        numeroTel: req.body.numeroTel,
		typeTel: req.body.typeTel
    }, {new: true})
    .then(telephone => {
        if(!telephone) {
            return res.status(404).send({
                message: "Not found with id " + id
            });
        }
        res.send(telephone);
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
    var id = req.params.telephoneId;
    Telephone.findByIdAndRemove(id)
    .then(telephone => {
        if(!telephone) {
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