"use strict";

var angular = require('angular');
//TODO increase this scope
angular.module('formApp').directive('siteHeader', require('./site_header'));
angular.module('formApp').directive('newListingFormLocation', require('./form_templates/formtemplates'));
angular.module('formApp').directive('newListingSoonestMove', require('./form_templates/newlisting'));
angular.module('formApp').directive('locationForm', require('./form_templates/locationform'));
