'use strict';

angular.module('formApp')
.controller('mainCtrl', function($scope, dataService){
  //TODO make this be dependent of where they were last
  

  $scope.landingOption = 1;
  $scope.currentDisplayImage = "img/icons/transparent.png"
  dataService.getLayoutInfo(function(response) {
    $scope.layout_info = response.data;

  })

  $scope.run = function (index) {
    $scope.landingOption = index;
    $scope.currentDisplayImage = $scope.layout_info[index].data[0].imgSrc;
  }

})
