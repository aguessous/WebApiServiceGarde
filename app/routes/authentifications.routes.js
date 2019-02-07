module.exports = function(app) {
    var authentifications = require('../controllers/authentification.controller.js');
	
 // Create a new one
 app.post('/api/authentifications', authentifications.create);

 // Retrieve all 
 app.get('/api/authentifications', authentifications.findAll);

 // Retrieve a single  by Id
 app.get('/api/authentifications/:authentificationId', authentifications.findOne);

 // Update  with Id
 app.put('/api/authentifications/:authentificationId', authentifications.update);

 // Delete  with Id
 app.delete('/api/authentifications/:authentificationId', authentifications.delete);

}