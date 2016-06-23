"use strict"

//this class is a controller for getting property data.


function getProperty() {
  this.getPropertyData = function ($q) {
    console.log("you called the getProperty service!");
  }
}

module.exports = getProperty;
