"use strict";

var angular = require('angular');
//TODO increase this scope
angular.module('formApp').directive('siteHeader', require('./site_header'));
angular.module('formApp').directive('newListingFormLocation', require('./formtemplates'));
angular.module('formApp').directive('newListingSoonestMove', require('./newlisting'));
