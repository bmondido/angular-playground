(function(){
    'use strict';
    angular.module('app.contacts').
        controller('ContactDetailsCtrl', ['$scope', '$routeParams','ContactFactory',
            function($scope,$routeParams,ContactFactory){
                $scope.masterContact = {};
                $scope.contact = {};
                ContactFactory.getContact($routeParams.contactId).then(function(data){
                    $scope.masterContact = data;
                    $scope.contact = angular.copy($scope.masterContact);
                }, function(error){
                    console.log('error', error);
                });

                $scope.saveContact = function(){
                    $scope.masterContact = angular.copy($scope.contact);
                    ContactFactory.saveContact($scope.contact);
                };

                $scope.reset = function(){
                    $scope.contact = angular.copy($scope.masterContact);
                };
            }
        ]);
})();