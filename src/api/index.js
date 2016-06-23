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


router.post('/markers', function (req, res) {
  var marker = req.body;
    Marker.create(marker, function (err, marker) {
    if (err) {
      return res.status(500).json({err: err.message});
    }
  })
  res.json({'marker': marker, message: "marker added"});
});
router.put('/markers/:id', function (req, res) {
  var id = req.params.id;
  var marker = req.body;
  if (marker && marker._id!=id) {
    console.log(marker._id+ " " + id);
    return res.status(500).json({err: "Ids don't match"});

  }

  Marker.findByIdAndUpdate(id, marker, {new: true}, function (err, marker) {
    if (err) {
      return req.status(500).json({err: err.message});
    }
    res.json({'marker': marker, message: "updated"});
  })
  // Marker.create(marker, function (err, marker) {
  //   if (err) {
  //     return res.status(500).json({err: err.message});
  //   }
  // })
  // res.json({'marker': marker, message: "marker added"});
});

module.exports = router;
