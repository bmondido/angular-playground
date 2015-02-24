(function(){
    'use strict';

    angular.module('app.contacts').
        controller('CreateContactCtrl', ['$scope', 'ContactFactory', function($scope, ContactFactory){
            $scope.contact = {};

            $scope.saveContact = function(){
                ContactFactory.saveContact($scope.contact);
            };

            $scope.reset = function(){
                $scope.contact = {};
            }
        }]);
})();