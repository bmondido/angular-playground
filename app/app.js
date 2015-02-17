(function() {
    'use strict';

    angular.module('app', [
        'ngRoute',
        'app.contacts'
    ]).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/'});
        }]);
})();
