'use strict';


var mongoose = require ('mongoose');

mongoose.connect ('mongodb://localhost/markers', function (err) {
  if (!err) {
    console.log('connected fine!');
  }
});
