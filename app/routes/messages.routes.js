module.exports = function(app) {
    var messages = require('../controllers/message.controller.js');
	
 // Create a new one
 app.post('/api/messages', messages.create);

 // Retrieve all 
 app.get('/api/messages', messages.findAll);

 // Retrieve a single  by Id
 app.get('/api/messages/:messageId', messages.findOne);

 // Update  with Id
 app.put('/api/messages/:messageId', messages.update);

 // Delete  with Id
 app.delete('/api/messages/:messageId', messages.delete);

}