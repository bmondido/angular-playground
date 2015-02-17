(function(){
    'use strict';

    angular.module('app.contacts').
        controller('ContactsCtrl', ['$scope', 'ContactFactory', function($scope, ContactFactory){
            ContactFactory.getContact(1).then(function(data){
                $scope.contacts = [data];
            }, function(error){
                console.log('error', error);
            })
        }]);
})();