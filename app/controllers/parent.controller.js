const Parent = require('../models/parent.model.js');


// POST one
exports.create = (req, res) => {
    // Create a Customer
    const parent = new Parent({
        lienParent:req.body.lienParent,
        nomParent:req.body.nomParent,
        prenomParent:req.body.prenomParent,
        courrielParent:req.body.prenomParent
    });

    // Save it in the MongoDB
    parent.save()
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
    Parent.find()
    .then(parents => {
        res.send(parents);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


// FIND one
exports.findOne = (req, res) => {
    var id = req.params.parentId;
    Parent.findById(id)
    .then(parent => {
        if(!parent) {
            return res.status(404).send({
                message: "Not found with id " + id
            });            
        }
        res.send(parent);
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
    var id = req.params.parentId;
    Parent.findByIdAndUpdate(id, {
        lienParent:req.body.lienParent,
        nomParent:req.body.nomParent,
        prenomParent:req.body.prenomParent,
        courrielParent:req.body.prenomParent
        
    }, {new: true})
    .then(parent => {
        if(!parent) {
            return res.status(404).send({
                message: "Not found with id " + id
            });
        }
        res.send(parent);
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
    var id = req.params.parentId;
    Parent.findByIdAndRemove(id)
    .then(parent => {
        if(!parent) {
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