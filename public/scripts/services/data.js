'use strict';

angular.module('formApp')
.service('dataService', function($http) {
  this.getLayoutInfo = function (callback) {
    $http.get('info/setup.json')
    .then(callback)
  };
})
