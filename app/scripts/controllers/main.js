'use strict';

function MainCtrl($scope, dataService, addressService){
  //TODO make this be dependent of where they were last


  $scope.landingOption = 1;
  $scope.currentDisplayImage = "img/icons/transparent.png"
  dataService.getLayoutInfo(function(response) {
    $scope.layout_info = response.data;

  })

  addressService.getAddress(function (response) {
    //now start google maps function!!!
    var lat = response.data.results[0].geometry.location.lat;
    var lon = response.data.results[0].geometry.location.lng;
  //  addMarker(lat, lon);
  })

  $scope.run = function (index) {
    $scope.landingOption = index;
    $scope.currentDisplayImage = $scope.layout_info[index].data[0].imgSrc;
  }

}

module.exports = MainCtrl;
