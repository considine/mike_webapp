webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);
	angular.module('formApp', []);

	__webpack_require__(3);
	__webpack_require__(7);
	__webpack_require__(11);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);



	angular.module('formApp').service('dataService', __webpack_require__(4));
	angular.module('formApp').service('addressService', __webpack_require__(5));
	angular.module('formApp').service('propertyService', __webpack_require__(6));


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	function getData($http) {
	  this.getLayoutInfo = function (callback) {
	    $http.get('info/setup.json')
	    .then(callback)
	  };
	}

	module.exports = getData;


/***/ },
/* 5 */
/***/ function(module, exports) {

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


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict"

	//this class is a controller for getting property data.


	function getProperty() {
	  this.getPropertyData = function ($q) {
	    console.log("you called the getProperty service!");
	  }
	}

	module.exports = getProperty;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var angular = __webpack_require__(1);
	//TODO increase this scope
	angular.module('formApp').directive('siteHeader', __webpack_require__(8));
	angular.module('formApp').directive('newListingFormLocation', __webpack_require__(9));
	angular.module('formApp').directive('newListingSoonestMove', __webpack_require__(10));


/***/ },
/* 8 */
/***/ function(module, exports) {

	// <div id="top-header-bar">
	//
	// </div>

	function setTopBar () {
	  return {
	    templateUrl: 'templates/topbar.html',
	    //template: '<div id="top-header-bar"></div>',
	    replace: true,
	    controller: 'mainCtrl'
	  };
	}

	module.exports = setTopBar;


/***/ },
/* 9 */
/***/ function(module, exports) {

	// Some templates used
	//Table of Contents:
	//**** 1.) newListingFormLocation: Lease start and end date form directive
	//**** 1.) newListingSoonestMove: Soonest available move in, form template
	// Some templates used
	//Table of Contents:
	//**** 1.) newListingFormLocation: Lease start and end date form directive
	//**** 1.) newListingSoonestMove: Soonest available move in, form template

	 function newListingForm () {
	  //var htmlString = '<div>';
	  var htmlString = '<div style="display: block;">';
	  htmlString = htmlString + '<label for="move-in-date" class="date-picker-label"> LEASE START </label> <br /><input type="text" id="move-in-date" class="datepicker">';
	  //line break between them
	  //add the second label (same exact thing)
	  htmlString = htmlString + '<label for="move-out-date" class="date-picker-label"> LEASE END </label> <br /><input type="text" id="move-out-date" class="datepicker">';
	  htmlString += '</div>';
	    return {
	        template: htmlString

	    };
	}

	module.exports = newListingForm;




	// ''<label for="move-in-date"> Move In Date</label> <br />
	//          <input type="text" id="move-in-date" class="datepicker">''





	// ''<label for="move-in-date"> Move In Date</label> <br />
	//          <input type="text" id="move-in-date" class="datepicker">''


/***/ },
/* 10 */
/***/ function(module, exports) {

	function soonestMove () {
	  //TODO pt
	  var htmlString = '<div style="display: inline-block">';
	  htmlString = htmlString + '<label for="soonest-move-date" class="date-picker-label"> SOONEST START DATE </label> <br /><input type="text" id="soones-move-date" class="datepicker">';
	  //line break between them
	  htmlString += '</div>';
	  return {
	    template: htmlString
	  };


	}
	module.exports = soonestMove;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('formApp').controller('mainCtrl', __webpack_require__(12));


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	function MainCtrl($scope, dataService, addressService, propertyService){
	  //TODO make this be dependent of where they were last



	  $scope.landingOption = 0;
	  $scope.currentDisplayImage = "img/icons/transparent.png"

	  propertyService.getPropertyData();

	  dataService.getLayoutInfo(function(response) {
	    $scope.layout_info = response.data;

	  })
	  $scope.fetchMap = function (input) {
	    var address = input.replace(/ /g,"+");
	    addressService.getAddress(address, function (response) {
	      //now start google maps function!!!
	      var lat = response.data.results[0].geometry.location.lat;
	      var lon = response.data.results[0].geometry.location.lng;
	      findAddress(lat, lon);
	      console.log("The landing option is " + landingOption);

	    })
	  }
	  //GETS EVERYTHING SET UP
	  $scope.run = function (index) {
	    $scope.landingOption = index;
	    $scope.currentDisplayImage = $scope.layout_info[index].data[0].imgSrc;
	  }



	}

	module.exports = MainCtrl;


/***/ }
]);