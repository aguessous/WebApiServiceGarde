module.exports = function(app) {

	var initialController = require('../controllers/init.controller.js')
	
	app.get('/api/data/init', initialController.init);
}