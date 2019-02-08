module.exports = function(app) {
    var users = require('../controllers/user.controller.js');
	
 // Create a new one
 //app.post('/api/users', users.create);

 // Retrieve all 
 //app.get('/api/users', users.findAll);

 // Retrieve a single  by Id
 //app.get('/api/users/:userId', users.findOne);

 // Update  with Id
 //app.put('/api/users/:userId', users.update);

 // Delete  with Id
 //app.delete('/api/users/:userId', users.delete);


app.post('/api/users/register', users.register);

app.post('/api/users/login', users.login);


}