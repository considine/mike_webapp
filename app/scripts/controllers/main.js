'use strict';

function MainCtrl($scope, dataService, addressService, mapService){
  //TODO make this be dependent of where they were last


  $scope.landingOption = 0;
  // $scope.currentDisplayImage = "img/icons/transparent.png"
  // run(landingOption);
  dataService.getLayoutInfo(function(response) {
    $scope.layout_info = response.data;
    $scope.run($scope.landingOption);

  })

  $scope.setMap = function () {
      mapService.getMap();
  }


//TODO rename this RUSTYBUSTY
  $scope.fetchMap = function (input) {
    var address = input.replace(/ /g,"+");
    addressService.getAddress(address, function (response) {
      //now start google maps function!!!
      var lat = response.data.results[0].geometry.location.lat;
      var lon = response.data.results[0].geometry.location.lng;
      findAddress(lat, lon);

    })
  }
  //GETS EVERYTHING SET UP
  $scope.run = function (index) {
    $scope.landingOption = index;
    $scope.currentDisplayImage = $scope.layout_info[index].data[0].imgSrc;
  }



//for the snap drawer
  $scope.opts = {
    disable: 'right'
  };






}

module.exports = MainCtrl;


//index:
/*

funcs
Fetchmap:
  gets address from google maps
run:
  Sets up icons and dash
-properties:
doc.data
  daa on inputs

*/
