const express = require('express');

const app = express();



 
  require('./api/database'); 
  const routes = require('./api/index');  
  
  
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  
  app.use(express.static(__dirname + "/dist/"));  // Directory for the 'hg build'
  //app.use(favicon(__dirname + '/public/favicon.ico'));
  app.use('/api', routes);  // Routes for our API (this is for the frontend conection)
  
  // Initializes the server
  const PORT = process.env.PORT ;
  const server = app.listen(PORT, function (error) {
    if (error) throw error;
    else console.log("Application server now running on port", server.address().port);
  });
  
  module.exports = app;




/*
mongoose.connect(`mongodb+srv://viola:cadencetheatre@cadence.ycthy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Connected to database');
    port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.log(`Express server listening on port ${port}`);
    });


    const routes = require('./api/index');
    //app.use(favicon(__dirname + '/public/favicon.ico'));
    app.use('/api', routes);  // Routes for our API (this is for the frontend conection)

    // Run the app by serving the static files in the dist directory
    app.use(express.static(__dirname + '/dist/paper-kit-2-angular'));

    app.get('/*', function (req, res) {

      res.sendFile(path.join(__dirname + '/dist/paper-kit-2-angular/index.html'));
    });
  });
*/
