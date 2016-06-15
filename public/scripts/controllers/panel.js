'use strict';

angular.module('formApp')
.controller('panelCtrl', function($scope, dataService, messages){
  dataService.getLayoutInfo(function(response) {
    console.log(response.data);
    $scope.layout_info = response.data;
  })

console.log("the is: " + messages.item)
  $scope.setIndex = function (index) {
    messages.callCallback(index);
    console.log("the index is " + index);
  }

})
