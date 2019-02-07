module.exports = function(app) {
    var parents = require('../controllers/parent.controller.js');
	
 // Create a new one
 app.post('/api/parents', parents.create);

 // Retrieve all 
 app.get('/api/parents', parents.findAll);

 // Retrieve a single  by Id
 app.get('/api/parents/:parentId', parents.findOne);

 // Update  with Id
 app.put('/api/parents/:parentId', parents.update);

 // Delete  with Id
 app.delete('/api/parents/:parentId', parents.delete);

}