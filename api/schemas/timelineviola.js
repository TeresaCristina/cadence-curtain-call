const mongoose = require("mongoose");

const TimelineViolaSchema = mongoose.Schema({
  day: { type: String, required: true },
  year: { type: String, default: "1934", required: true },
  month: { type: String, required: true },
  hour: { type: String, required: true }, 
  minute: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('timelineviola', TimelineViolaSchema, 'TimelineViola');