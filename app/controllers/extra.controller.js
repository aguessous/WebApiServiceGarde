const Extra = require('../models/extra.model.js');


// POST one
exports.create = (req, res) => {
    // Create a Customer
    const extra = new Extra({
        dateExta:req.body.dateExta,
        prestationExtra:req.body.prestationExtra,
        heureExtra:req.body.heureExtra
       
       
    });

    // Save it in the MongoDB
    extra.save()
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
    Extra.find()
    .then(extras => {
        res.send(extras);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


// FIND one
exports.findOne = (req, res) => {
    var id = req.params.extraId;
    Extra.findById(id)
    .then(extra => {
        if(!extra) {
            return res.status(404).send({
                message: "Not found with id " + id
            });            
        }
        res.send(extra);
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
    var id = req.params.extraId;
    Extra.findByIdAndUpdate(id, {
        dateExta:req.body.dateExta,
        prestationExtra:req.body.prestationExtra,
        heureExtra:req.body.heureExtra
        
    }, {new: true})
    .then(extra => {
        if(!extra) {
            return res.status(404).send({
                message: "Not found with id " + id
            });
        }
        res.send(extra);
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
    var id = req.params.extraId;
    Extra.findByIdAndRemove(id)
    .then(extra => {
        if(!extra) {
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