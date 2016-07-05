/*
 * Snap.js
 *
 * Copyright 2013, Jacob Kelley - http://jakiestfu.com/
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 *
 * Github:  http://github.com/jakiestfu/Snap.js/
 * Version: 1.9.2
 */
(function(c,b){var a=a||function(k){var f={element:null,dragger:null,disable:"none",addBodyClasses:true,hyperextensible:true,resistance:0.5,flickThreshold:50,transitionSpeed:0.3,easing:"ease",maxPosition:266,minPosition:-266,tapToClose:true,touchToDrag:true,slideIntent:40,minDragDistance:5},e={simpleStates:{opening:null,towards:null,hyperExtending:null,halfway:null,flick:null,translation:{absolute:0,relative:0,sinceDirectionChange:0,percentage:0}}},h={},d={hasTouch:(b.ontouchstart===null),eventType:function(m){var l={down:(d.hasTouch?"touchstart":"mousedown"),move:(d.hasTouch?"touchmove":"mousemove"),up:(d.hasTouch?"touchend":"mouseup"),out:(d.hasTouch?"touchcancel":"mouseout")};return l[m]},page:function(l,m){return(d.hasTouch&&m.touches.length&&m.touches[0])?m.touches[0]["page"+l]:m["page"+l]},klass:{has:function(m,l){return(m.className).indexOf(l)!==-1},add:function(m,l){if(!d.klass.has(m,l)&&f.addBodyClasses){m.className+=" "+l}},remove:function(m,l){if(f.addBodyClasses){m.className=(m.className).replace(l,"").replace(/^\s+|\s+$/g,"")}}},dispatchEvent:function(l){if(typeof h[l]==="function"){return h[l].call()}},vendor:function(){var m=b.createElement("div"),n="webkit Moz O ms".split(" "),l;for(l in n){if(typeof m.style[n[l]+"Transition"]!=="undefined"){return n[l]}}},transitionCallback:function(){return(e.vendor==="Moz"||e.vendor==="ms")?"transitionend":e.vendor+"TransitionEnd"},canTransform:function(){return typeof f.element.style[e.vendor+"Transform"]!=="undefined"},deepExtend:function(l,n){var m;for(m in n){if(n[m]&&n[m].constructor&&n[m].constructor===Object){l[m]=l[m]||{};d.deepExtend(l[m],n[m])}else{l[m]=n[m]}}return l},angleOfDrag:function(l,o){var n,m;m=Math.atan2(-(e.startDragY-o),(e.startDragX-l));if(m<0){m+=2*Math.PI}n=Math.floor(m*(180/Math.PI)-180);if(n<0&&n>-180){n=360-Math.abs(n)}return Math.abs(n)},events:{addEvent:function g(m,l,n){if(m.addEventListener){return m.addEventListener(l,n,false)}else{if(m.attachEvent){return m.attachEvent("on"+l,n)}}},removeEvent:function g(m,l,n){if(m.addEventListener){return m.removeEventListener(l,n,false)}else{if(m.attachEvent){return m.detachEvent("on"+l,n)}}},prevent:function(l){if(l.preventDefault){l.preventDefault()}else{l.returnValue=false}}},parentUntil:function(n,l){var m=typeof l==="string";while(n.parentNode){if(m&&n.getAttribute&&n.getAttribute(l)){return n}else{if(!m&&n===l){return n}}n=n.parentNode}return null}},i={translate:{get:{matrix:function(n){if(!d.canTransform()){return parseInt(f.element.style.left,10)}else{var m=c.getComputedStyle(f.element)[e.vendor+"Transform"].match(/\((.*)\)/),l=8;if(m){m=m[1].split(",");if(m.length===16){n+=l}return parseInt(m[n],10)}return 0}}},easeCallback:function(){f.element.style[e.vendor+"Transition"]="";e.translation=i.translate.get.matrix(4);e.easing=false;clearInterval(e.animatingInterval);if(e.easingTo===0){d.klass.remove(b.body,"snapjs-right");d.klass.remove(b.body,"snapjs-left")}d.dispatchEvent("animated");d.events.removeEvent(f.element,d.transitionCallback(),i.translate.easeCallback)},easeTo:function(l){if(!d.canTransform()){e.translation=l;i.translate.x(l)}else{e.easing=true;e.easingTo=l;f.element.style[e.vendor+"Transition"]="all "+f.transitionSpeed+"s "+f.easing;e.animatingInterval=setInterval(function(){d.dispatchEvent("animating")},1);d.events.addEvent(f.element,d.transitionCallback(),i.translate.easeCallback);i.translate.x(l)}if(l===0){f.element.style[e.vendor+"Transform"]=""}},x:function(m){if((f.disable==="left"&&m>0)||(f.disable==="right"&&m<0)){return}if(!f.hyperextensible){if(m===f.maxPosition||m>f.maxPosition){m=f.maxPosition}else{if(m===f.minPosition||m<f.minPosition){m=f.minPosition}}}m=parseInt(m,10);if(isNaN(m)){m=0}if(d.canTransform()){var l="translate3d("+m+"px, 0,0)";f.element.style[e.vendor+"Transform"]=l}else{f.element.style.width=(c.innerWidth||b.documentElement.clientWidth)+"px";f.element.style.left=m+"px";f.element.style.right=""}}},drag:{listen:function(){e.translation=0;e.easing=false;d.events.addEvent(f.element,d.eventType("down"),i.drag.startDrag);d.events.addEvent(f.element,d.eventType("move"),i.drag.dragging);d.events.addEvent(f.element,d.eventType("up"),i.drag.endDrag)},stopListening:function(){d.events.removeEvent(f.element,d.eventType("down"),i.drag.startDrag);d.events.removeEvent(f.element,d.eventType("move"),i.drag.dragging);d.events.removeEvent(f.element,d.eventType("up"),i.drag.endDrag)},startDrag:function(n){var m=n.target?n.target:n.srcElement,l=d.parentUntil(m,"data-snap-ignore");if(l){d.dispatchEvent("ignore");return}if(f.dragger){var o=d.parentUntil(m,f.dragger);if(!o&&(e.translation!==f.minPosition&&e.translation!==f.maxPosition)){return}}d.dispatchEvent("start");f.element.style[e.vendor+"Transition"]="";e.isDragging=true;e.hasIntent=null;e.intentChecked=false;e.startDragX=d.page("X",n);e.startDragY=d.page("Y",n);e.dragWatchers={current:0,last:0,hold:0,state:""};e.simpleStates={opening:null,towards:null,hyperExtending:null,halfway:null,flick:null,translation:{absolute:0,relative:0,sinceDirectionChange:0,percentage:0}}},dragging:function(s){if(e.isDragging&&f.touchToDrag){var v=d.page("X",s),u=d.page("Y",s),t=e.translation,o=i.translate.get.matrix(4),n=v-e.startDragX,p=o>0,q=n,w;if((e.intentChecked&&!e.hasIntent)){return}if(f.addBodyClasses){if((o)>0){d.klass.add(b.body,"snapjs-left");d.klass.remove(b.body,"snapjs-right")}else{if((o)<0){d.klass.add(b.body,"snapjs-right");d.klass.remove(b.body,"snapjs-left")}}}if(e.hasIntent===false||e.hasIntent===null){var m=d.angleOfDrag(v,u),l=(m>=0&&m<=f.slideIntent)||(m<=360&&m>(360-f.slideIntent)),r=(m>=180&&m<=(180+f.slideIntent))||(m<=180&&m>=(180-f.slideIntent));if(!r&&!l){e.hasIntent=false}else{e.hasIntent=true}e.intentChecked=true}if((f.minDragDistance>=Math.abs(v-e.startDragX))||(e.hasIntent===false)){return}d.events.prevent(s);d.dispatchEvent("drag");e.dragWatchers.current=v;if(e.dragWatchers.last>v){if(e.dragWatchers.state!=="left"){e.dragWatchers.state="left";e.dragWatchers.hold=v}e.dragWatchers.last=v}else{if(e.dragWatchers.last<v){if(e.dragWatchers.state!=="right"){e.dragWatchers.state="right";e.dragWatchers.hold=v}e.dragWatchers.last=v}}if(p){if(f.maxPosition<o){w=(o-f.maxPosition)*f.resistance;q=n-w}e.simpleStates={opening:"left",towards:e.dragWatchers.state,hyperExtending:f.maxPosition<o,halfway:o>(f.maxPosition/2),flick:Math.abs(e.dragWatchers.current-e.dragWatchers.hold)>f.flickThreshold,translation:{absolute:o,relative:n,sinceDirectionChange:(e.dragWatchers.current-e.dragWatchers.hold),percentage:(o/f.maxPosition)*100}}}else{if(f.minPosition>o){w=(o-f.minPosition)*f.resistance;q=n-w}e.simpleStates={opening:"right",towards:e.dragWatchers.state,hyperExtending:f.minPosition>o,halfway:o<(f.minPosition/2),flick:Math.abs(e.dragWatchers.current-e.dragWatchers.hold)>f.flickThreshold,translation:{absolute:o,relative:n,sinceDirectionChange:(e.dragWatchers.current-e.dragWatchers.hold),percentage:(o/f.minPosition)*100}}}i.translate.x(q+t)}},endDrag:function(m){if(e.isDragging){d.dispatchEvent("end");var l=i.translate.get.matrix(4);if(e.dragWatchers.current===0&&l!==0&&f.tapToClose){d.dispatchEvent("close");d.events.prevent(m);i.translate.easeTo(0);e.isDragging=false;e.startDragX=0;return}if(e.simpleStates.opening==="left"){if((e.simpleStates.halfway||e.simpleStates.hyperExtending||e.simpleStates.flick)){if(e.simpleStates.flick&&e.simpleStates.towards==="left"){i.translate.easeTo(0)}else{if((e.simpleStates.flick&&e.simpleStates.towards==="right")||(e.simpleStates.halfway||e.simpleStates.hyperExtending)){i.translate.easeTo(f.maxPosition)}}}else{i.translate.easeTo(0)}}else{if(e.simpleStates.opening==="right"){if((e.simpleStates.halfway||e.simpleStates.hyperExtending||e.simpleStates.flick)){if(e.simpleStates.flick&&e.simpleStates.towards==="right"){i.translate.easeTo(0)}else{if((e.simpleStates.flick&&e.simpleStates.towards==="left")||(e.simpleStates.halfway||e.simpleStates.hyperExtending)){i.translate.easeTo(f.minPosition)}}}else{i.translate.easeTo(0)}}}e.isDragging=false;e.startDragX=d.page("X",m)}}}},j=function(l){if(l.element){d.deepExtend(f,l);e.vendor=d.vendor();i.drag.listen()}};this.open=function(l){d.dispatchEvent("open");d.klass.remove(b.body,"snapjs-expand-left");d.klass.remove(b.body,"snapjs-expand-right");if(l==="left"){e.simpleStates.opening="left";e.simpleStates.towards="right";d.klass.add(b.body,"snapjs-left");d.klass.remove(b.body,"snapjs-right");i.translate.easeTo(f.maxPosition)}else{if(l==="right"){e.simpleStates.opening="right";e.simpleStates.towards="left";d.klass.remove(b.body,"snapjs-left");d.klass.add(b.body,"snapjs-right");i.translate.easeTo(f.minPosition)}}};this.close=function(){d.dispatchEvent("close");i.translate.easeTo(0)};this.expand=function(l){var m=c.innerWidth||b.documentElement.clientWidth;if(l==="left"){d.dispatchEvent("expandLeft");d.klass.add(b.body,"snapjs-expand-left");d.klass.remove(b.body,"snapjs-expand-right")}else{d.dispatchEvent("expandRight");d.klass.add(b.body,"snapjs-expand-right");d.klass.remove(b.body,"snapjs-expand-left");m*=-1}i.translate.easeTo(m)};this.on=function(l,m){h[l]=m;return this};this.off=function(l){if(h[l]){h[l]=false}};this.enable=function(){d.dispatchEvent("enable");i.drag.listen()};this.disable=function(){d.dispatchEvent("disable");i.drag.stopListening()};this.settings=function(l){d.deepExtend(f,l)};this.state=function(){var l,m=i.translate.get.matrix(4);if(m===f.maxPosition){l="left"}else{if(m===f.minPosition){l="right"}else{l="closed"}}return{state:l,info:e.simpleStates}};j(k)};if((typeof module!=="undefined")&&module.exports){module.exports=a}if(typeof ender==="undefined"){this.Snap=a}if((typeof define==="function")&&define.amd){define("snap",[],function(){return a})}}).call(this,window,document);

angular.module("snap",[]),function(){"use strict";var a=[1,8,5],b={full:a.join("."),major:a[0],minor:a[1],patch:a[2]};angular.module("snap").constant("SNAP_VERSION",b)}(),angular.module("snap").directive("snapClose",["$rootScope","snapRemote",function(a,b){"use strict";return{restrict:"A",link:function(c,d,e){d.bind("click",function(){b.close(c.$eval(e.snapId)),a.$digest()})}}}]),angular.module("snap").directive("snapContent",["SnapConstructor","snapRemote",function(a,b){"use strict";return{restrict:"AE",link:function(c,d,e){d.addClass("snap-content");var f=e.snapId;f&&(f=c.$eval(e.snapId));var g=angular.extend({},b.globalOptions),h=function(a,d){c.$watch(function(){return c.$eval(a)},function(a,c){angular.isDefined(c)&&a!==c&&b.getSnapper(f).then(function(b){var c={};c[d]=a,b.settings(c)})})};angular.forEach(e,function(a,b){0===b.indexOf("snapOpt")&&(b=b.substring(7),b.length&&(b=b[0].toLowerCase()+b.substring(1),g[b]=c.$eval(a),h(a,b)))}),g.element=d[0],angular.isDefined(e.snapOptions)&&e.snapOptions&&angular.extend(g,c.$eval(e.snapOptions)),b.register(new a(g),f),angular.isDefined(e.snapOptions)&&e.snapOptions&&c.$watch(e.snapOptions,function(a){b.getSnapper(f).then(function(b){b.settings(a)})},!0),c.$on("$destroy",function(){b.unregister(f)})}}}]),angular.module("snap").directive("snapDragger",["snapRemote",function(a){"use strict";return{restrict:"AE",link:function(b,c,d){var e=b.$eval(d.snapId);a.getSnapper(e).then(function(a){a.settings({dragger:c[0]})})}}}]),angular.module("snap").directive("snapDrawer",function(){"use strict";return{restrict:"AE",link:function(a,b,c){b.addClass("snap-drawer");var d=b.parent(),e=!0;for("right"===c.snapDrawer?b.addClass("snap-drawer-right"):b.addClass("snap-drawer-left");d.length;)d.hasClass("snap-drawers")&&(e=!1),d=d.parent();e&&b.wrap('<div class="snap-drawers" />')}}}),angular.module("snap").directive("snapDrawers",function(){"use strict";return{restrict:"AE",compile:function(a,b){a.addClass("snap-drawers")}}}),angular.module("snap").directive("snapToggle",["$rootScope","snapRemote",function(a,b){"use strict";return{restrict:"A",link:function(c,d,e){var f=e.snapId,g=e.snapToggle||"left";if(f&&(f=c.$eval(f)),!e.snapUnsafe){var h=!1;d.bind("mousedown",function(a){h=!0,a.stopImmediatePropagation()}),d.bind("mouseup",function(a){h&&a.stopImmediatePropagation(),h=!1})}d.bind("click",function(){b.toggle(g,f),a.$digest()})}}}]),angular.module("snap").provider("SnapConstructor",function(){"use strict";var a;this.use=function(b){a=b},this.$get=["$window",function(b){var c=a||b.Snap;if(angular.isUndefined(c))throw new Error("Snap constructor is not defined. Make sure window.Snap is defined or supply your own with SnapConstructorProvider.use(MySnap).");return c}]}),angular.module("snap").provider("snapRemote",function(){"use strict";var a=this;return this.globalOptions={},this.$get=["$q",function(b){var c,d,e={},f="__DEFAULT_SNAPPER_ID__",g={};return g.globalOptions=a.globalOptions,g.getSnapper=function(a){return a=a||f,e.hasOwnProperty(a)||c(a),e[a].deferred.promise},g.register=function(a,b){b=b||f,e.hasOwnProperty(b)||c(b),e[b].isResolved&&c(b),d(a,b)},g.unregister=function(a){a=a||f,e.hasOwnProperty(a)&&delete e[a]},g.toggle=function(a,b){b=b||f,g.getSnapper(b).then(function(c){a===c.state().state?g.close(b):g.open(a,b)})},g.open=function(a,b){b=b||f,g.getSnapper(b).then(function(b){b.open(a)})},g.close=function(a){a=a||f,g.getSnapper(a).then(function(a){a.close()})},g.expand=function(a,b){b=b||f,g.getSnapper(b).then(function(b){b.expand(a)})},g.enable=function(a){a=a||f,g.getSnapper(a).then(function(a){a.enable()})},g.disable=function(a){a=a||f,g.getSnapper(a).then(function(a){a.disable()})},c=function(a){e[a]={deferred:b.defer(),isResolved:!1}},d=function(a,b){e[b].deferred.resolve(a),e[b].isResolved=!0},g}],this});
webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var angular = __webpack_require__(1);




	angular.module('formApp', ['snap']);

	__webpack_require__(3);
	__webpack_require__(6);
	__webpack_require__(10);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var angular = __webpack_require__(1);



	angular.module('formApp').service('dataService', __webpack_require__(4));
	angular.module('formApp').service('addressService', __webpack_require__(5)); 


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
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var angular = __webpack_require__(1);
	//TODO increase this scope
	angular.module('formApp').directive('siteHeader', __webpack_require__(7));
	angular.module('formApp').directive('newListingFormLocation', __webpack_require__(8));
	angular.module('formApp').directive('newListingSoonestMove', __webpack_require__(9));


/***/ },
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('formApp').controller('mainCtrl', __webpack_require__(11));


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	function MainCtrl($scope, dataService, addressService){
	  //TODO make this be dependent of where they were last


	  $scope.landingOption = 0;
	  // $scope.currentDisplayImage = "img/icons/transparent.png"
	  // run(landingOption);
	  dataService.getLayoutInfo(function(response) {
	    $scope.layout_info = response.data;
	    $scope.run($scope.landingOption);

	  })
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

	  $scope.doc = ["hi", "bye"];





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


/***/ }
]);
var map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('google-map-holder'), {
//     center: {lat: 37.769, lng: -122.446},
//     zoom: 8,
//     streetViewControl: true
//   });
//
//
//   map.addListener('click', function(event) {
//     addMarker(event.latLng);
//   });
// }
//
// function addMarker(location) {
//
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map
//   });
//
// }
function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('google-map-holder'), {
    zoom: 4,
    center: uluru
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}


function findAddress (lt, lg) {
  var haightAshbury = {lat: parseFloat(lt), lng: parseFloat(lg)};
  addMarker(haightAshbury);
  map.setZoom(8);
  map.panTo(haightAshbury);
  map.setOptions({
      streetViewControl: showStreetViewControl
    });

}
