(function(){
    'use strict';

    angular.module('app.contacts').
        controller('ContactsCtrl', ['$scope', 'ContactFactory', function($scope, ContactFactory){
            $scope.contacts = [];
            ContactFactory.getContacts().then(function(data){
                $scope.contacts = data;
            }, function(error){
                console.log('error', error);
            })
        }]);
})();