'use strict';

function getAddress($http) {
  this.getAddress = function ( address, callback) {
    //todo fix this later
    var urlStart = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var urlMiddle = address;
    var urlEnd = "&key=AIzaSyDPCkkkkP7BAsionEIyZsR_z7ur3Ehr3NU";

    var url = urlStart + urlMiddle + urlEnd;
    var sample = 'https://maps.googleapis.com/maps/api/geocode/json?address=2401+Troost+Avenue,+Kansas+City,+MO&key=AIzaSyDPCkkkkP7BAsionEIyZsR_z7ur3Ehr3NU';
    $http.get(url)
    .then(callback)
  };
}

module.exports = getAddress;
