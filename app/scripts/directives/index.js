"use strict";

var angular = require('angular');


angular.module('formApp').directive('newListingFormLocation', require('./formtemplates'));
angular.module('formApp').directive('newListingSoonestMove', require('./newlisting'));
