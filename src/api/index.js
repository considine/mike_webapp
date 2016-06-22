"use strict";

var express = require('express');
var Marker = require('../models/markers');

var router = express.Router();



router.get('/markers', function (req, res) {
  
  Marker.find({}, function (err, markers) {
    if (err) {
      return res.status(500).json({message: err.message});
    }
    res.json({markers: markers});
  })
});
module.exports = router;
