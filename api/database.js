
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://viola:cadencetheatre@cadence.ycthy.mongodb.net/curtain-call?retryWrites=true&w=majority', { useUnifiedTopology:true,
  useNewUrlParser: true,
  useCreateIndex: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log('Database Conected!');
});