'use strict';

angular.module('formApp')
.controller('mainCtrl', function($scope, dataService, messages){
  //TODO make this be dependent of where they were last
  $scope.newIndexCallback = function (response) {
    console.log($scope.layout_info[response].data[2].visible +  " is rain");
    $setTimeout(function () {
      ($scope.layout_info[response].data[2].visible = !$scope.layout_info[response].data[2].visible);
    }, 10);
  }

  $scope.landingOption = 1;
  $scope.testBool = true;
  messages.add($scope.landingOption, $scope.newIndexCallback);
  dataService.getLayoutInfo(function(response) {
    $scope.layout_info = response.data;

  })

})
