'use strict';

angular.module('formApp')
.controller('mainCtrl', function($scope, dataService){
  dataService.getLayoutInfo(function(response) {
    console.log("done deal");
    $scope.layout_info = response.data;
  })
})
