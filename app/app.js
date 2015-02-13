'use strict';

// Declare app level module which depends on views, and components
angular.module('mobileapp', [
  'ngRoute',
  'app.contacts'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
