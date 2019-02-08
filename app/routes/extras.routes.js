module.exports = function(app) {
    var extras = require('../controllers/extra.controller.js');
	
 // Create a new one
 app.post('/api/extras', extras.create);

 // Retrieve all 
 app.get('/api/extras', extras.findAll);

 // Retrieve a single  by Id
 app.get('/api/extras/:extraId', extras.findOne);

 // Update  with Id
 app.put('/api/extras/:extraId', extras.update);

 // Delete  with Id
 app.delete('/api/extras/:extraId', extras.delete);

}