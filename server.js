const express = require('express');
const path = require('path');
const app = express();

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist/paper-kit-2-angular'));

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/paper-kit-2-angular/dist/index.html'));
});
    

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);