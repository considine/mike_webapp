'use strict';

function getAddress($http) {
  this.getAddress = function (callback) {
    //todo fix this later
    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=2401+Troost+Avenue,+Kansas+City,+MO&key=AIzaSyDPCkkkkP7BAsionEIyZsR_z7ur3Ehr3NU')
    .then(callback)
  };
}

module.exports = getAddress;
