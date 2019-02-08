var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to MongoDB.");    
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});

require('./app/routes/telephones.routes.js')(app);
require('./app/routes/prestations.routes.js')(app);
require('./app/routes/messages.routes.js')(app);
require('./app/routes/authentifications.routes.js')(app);
require('./app/routes/enfants.routes.js')(app);
require('./app/routes/parents.routes.js')(app);
require('./app/routes/tuteurs.routes.js')(app);
require('./app/routes/paiements.routes.js')(app);

require('./app/routes/extras.routes.js')(app);



require('./app/routes/init.routes.js')(app);

// Create a Server
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("App listening at http://%s:%s", host, port)
})