module.exports = function(app) {
    var tuteurs = require('../controllers/tuteur.controller.js');
	
 // Create a new one
 app.post('/api/tuteurs', tuteurs.create);

 // Retrieve all 
 app.get('/api/tuteurs', tuteurs.findAll);

 // Retrieve a single  by Id
 app.get('/api/tuteurs/:tuteurId', tuteurs.findOne);

 // Update   with Id
 app.put('/api/tuteurs/:tuteurId', tuteurs.update);

 // Delete  with Id
 app.delete('/api/tuteurs/:tuteurId', tuteurs.delete);

}