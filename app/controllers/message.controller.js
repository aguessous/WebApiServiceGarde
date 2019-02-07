const Message = require('../models/message.model.js');


// POST one
exports.create = (req, res) => {
    // Create a Customer
    const message = new Message({
        titreMessage:  req.body.titreMessage,
        corpsMessage:  req.body.corpsMessage,
        typeMessage:  req.body.typeMessage,
        destinataireMessage:  req.body.destinataireMessage
        
    });

    // Save it in the MongoDB
    message.save()
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
    Message.find()
    .then(messages => {
        res.send(messages);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


// FIND one
exports.findOne = (req, res) => {
    var id = req.params.messageId;
    Message.findById(id)
    .then(message => {
        if(!message) {
            return res.status(404).send({
                message: "Not found with id " + id
            });            
        }
        res.send(message);
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
    var id = req.params.messageId;
    Message.findByIdAndUpdate(id, {
        titreMessage:  req.body.titreMessage,
        corpsMessage:  req.body.corpsMessage,
        typeMessage:  req.body.typeMessage,
        destinataireMessage:  req.body.destinataireMessage
    }, {new: true})
    .then(message => {
        if(!message) {
            return res.status(404).send({
                message: "Not found with id " + id
            });
        }
        res.send(message);
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
    var id = req.params.messageId;
    Message.findByIdAndRemove(id)
    .then(message => {
        if(!message) {
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