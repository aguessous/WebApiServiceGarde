module.exports = function(app) {
    var enfants = require('../controllers/enfant.controller.js');
	
 // Create a new one
 app.post('/api/enfants', enfants.create);

 // Retrieve all 
 app.get('/api/enfants', enfants.findAll);

 // Retrieve a single  by Id
 app.get('/api/enfants/:enfantId', enfants.findOne);

 // Update  with Id
 app.put('/api/enfants/:enfantId', enfants.update);

 // Delete  with Id
 app.delete('/api/enfants/:enfantId', enfants.delete);

}