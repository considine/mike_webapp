'use strict';

function getData($http) {
  this.getLayoutInfo = function (callback) {
    $http.get('info/setup.json')
    .then(callback)
  };
}

module.exports = getData;
