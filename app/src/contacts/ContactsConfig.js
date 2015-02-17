(function(){
    'use strict';

    angular.module('app.contacts', ['ngRoute']).
        config(['$routeProvider', function($routeProvider){
            $routeProvider.when('/contacts',{
                templateUrl: 'src/contacts/templates/ContactsList.html',
                controller: 'ContactsCtrl'
            }).
            when('/contacts/:contactId', {
                templateUrl: 'src/contacts/templates/ContactDetails.html',
                controller: 'ContactDetailsCtrl'
            })
        }]);
})();