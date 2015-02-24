(function() {
    'use strict';

    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'app.contacts'
    ]).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/'});
        }]);
})();
