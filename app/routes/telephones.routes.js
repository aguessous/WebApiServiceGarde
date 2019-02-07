module.exports = function(app) {
    var telephones = require('../controllers/telephone.controller.js');
	
 // Create a new telephone
 app.post('/api/telephones', telephones.create);

 // Retrieve all telephones
 app.get('/api/telephones', telephones.findAll);

 // Retrieve a single Customer by Id
 app.get('/api/telephones/:telephoneId', telephones.findOne);

 // Update a Customer with Id
 app.put('/api/telephones/:telephoneId', telephones.update);

 // Delete a Customer with Id
 app.delete('/api/telephones/:telephoneId', telephones.delete);

}