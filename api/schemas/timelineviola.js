const mongoose = require("mongoose");

const TimelineViolaSchema = mongoose.Schema({
  event: { type: String },
  date: { type: Date },
  time: { type: String },
  details: { type: String }
});

module.exports = mongoose.model('timelineviola', TimelineViolaSchema, 'timelineviola');