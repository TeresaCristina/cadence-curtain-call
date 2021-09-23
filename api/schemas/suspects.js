const mongoose = require("mongoose");

const SuspectSchema = mongoose.Schema({
  name: { type: String },
  picture: { type: String },
  title: { type: String },
  details: { type: String }
});

module.exports = mongoose.model('suspect', SuspectSchema, 'suspect');