var angular = require("angular");



angular.module('formApp').service('dataService', require('./data.js'));
angular.module('formApp').service('addressService', require('./address.js'));
angular.module('formApp').service('propertyService', require('./properties.js'));
