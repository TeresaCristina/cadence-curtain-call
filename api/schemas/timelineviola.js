const mongoose = require("mongoose");

const TimelineViolaSchema = mongoose.Schema({
  day: { type: String },
  year: { type: String, default: "1934" },
  month: { type: String },
  hour: { type: String }, 
  minutes: { type: String },
  description: { type: String }
});

module.exports = mongoose.model("NEW_COLLECTION_NAME", TimelineViolaSchema);