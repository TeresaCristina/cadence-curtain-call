// Server - CovidBit - Fast Pandas
// Created: 01, February, 2021, Teresa Costa

const express = require('express');
const router = express.Router();
//const ctrlViewBus = require('../controllers/businessView');


// Server Status
router.get("/status", function (req, res) {
  //res.status(200).json({ status: "I am alive!" });
});

//router.get('/viola-timeline')// ctrlViewBus.getAllBusiness);
module.exports = router;