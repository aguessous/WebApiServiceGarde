module.exports = function(app) {
    var prestations = require('../controllers/prestation.controller.js');
	
 // Create a new one
 app.post('/api/prestations', prestations.create);

 // Retrieve all 
 app.get('/api/prestations', prestations.findAll);

 // Retrieve a single  by Id
 app.get('/api/prestations/:prestationId', prestations.findOne);

 // Update  with Id
 app.put('/api/prestations/:prestationId', prestations.update);

 // Delete  with Id
 app.delete('/api/prestations/:prestationId', prestations.delete);

}