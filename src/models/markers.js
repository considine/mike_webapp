"use strict";
var mongoose = require('mongoose');

//marker.name
//marker.lon
//marker.lt

var markerSchema = new mongoose.Schema({
  name: String,
  ln: Number,
  lt: Number
});

var model = mongoose.model('Marker', markerSchema);

module.exports = model;
