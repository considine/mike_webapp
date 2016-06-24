//to make seed data
"use strict";


var Marker = require('./models/markers.js');

var markers = [
  '1612 Forest Avenue, Wilmette',
  '1751 Irish Way, South Bend',
  '2401 Troost Avenue, Kansas City, MO'
]


markers.forEach(function (marker, index) {
  
  Marker.find({'name': marker}, function(err, markers) {
    if (!err && !markers.length) {

      Marker.create({name: marker});
    };
  });

})
