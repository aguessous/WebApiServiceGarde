module.exports = function(app) {
    var paiements = require('../controllers/paiement.controller.js');
	
 // Create a new one
 app.post('/api/paiements', paiements.create);

 // Retrieve all 
 app.get('/api/paiements', paiements.findAll);

 // Retrieve a single  by Id
 app.get('/api/paiements/:paiementId', paiements.findOne);

 // Update  with Id
 app.put('/api/paiements/:paiementId', paiements.update);

 // Delete  with Id
 app.delete('/api/paiements/:paiementId', paiements.delete);

}