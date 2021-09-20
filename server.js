const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();


mongoose.connect(`mongodb+srv://viola:cadencetheatre@cadence.ycthy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(() => {
  console.log('Connected to database');
  port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
  });
});

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist/paper-kit-2-angular'));

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/paper-kit-2-angular/index.html'));
});
    
