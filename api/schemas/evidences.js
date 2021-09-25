const mongoose = require("mongoose");

const EvidenceSchema = mongoose.Schema({
  name: { type: String },
  details: { type: String }
});

module.exports = mongoose.model('Evidence', SuspectSchema, 'evidence');