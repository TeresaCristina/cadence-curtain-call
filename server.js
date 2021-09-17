const express = require('express');
const app = express();

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist/paper-kit-2-angular'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/paper-kit-2-angular/'}
  );
  });

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);