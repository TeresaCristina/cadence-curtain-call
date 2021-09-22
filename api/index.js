// Server - CovidBit - Fast Pandas
// Created: 01, February, 2021, Teresa Costa

const express = require('express');
const router = express.Router();
const timelines = require('./controllers/timelines');


// Server Status
router.get("/status", function (req, res) {
  res.status(200).json({ status: "I am alive!" });
});

router.get('/all-events', timelines.allEvents);
router.post('/event', timelines.getEvent);
router.post('/new-event', timelines.newEvent);


module.exports = router;