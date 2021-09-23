// Server - CovidBit - Fast Pandas
// Created: 01, February, 2021, Teresa Costa

const express = require('express');
const router = express.Router();
const timelines = require('./controllers/timelines');
const suspects = require('./controllers/suspects');


// Server Status
router.get("/status", function (req, res) {
  res.status(200).json({ status: "I am alive!" });
});

router.get('/all-events', timelines.allEvents);
router.post('/event', timelines.getEvent);
router.post('/new-event', timelines.newEvent);
router.post('/edit-event', timelines.editEvent);

router.get('/all-suspects', suspects.allSuspects);
router.post('/add-suspect', suspects.newSuspect);


module.exports = router;