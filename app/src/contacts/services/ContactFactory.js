(function(){
    'use strict';

    angular.module('app.contacts').
        factory('ContactFactory', ['$http','$q',
            function($http, $q){
                var service = {};

                service.getContacts = function(){
                    //familiar promises
                    var deferred = $q.defer();
                    $http({
                        method: 'GET',
                        //call the appropriate API
                        url: 'contactsData/allContacts.json'
                    }).success(function(data){
                        deferred.resolve(data.contacts);
                    }).error(function(){
                        deferred.reject('error on get');
                    });

                    return deferred.promise;
                };

                service.getContact = function(id){
                    var deferred = $q.defer();
                    $http({
                        method: 'GET',
                        url: 'contactsData/' + id + '.json'
                    }).success(function(data){
                        deferred.resolve(data);
                    }).error(function(){
                        deferred.reject('error on get');
                    });

                    return deferred.promise;
                };

                service.saveContact = function(contact){
                    var deferred = $q.defer();
                    //TODO no need to write to json files right now. add later as fluff
//                    $http({
//                        method: 'POST',
//                        url: 'contactsData/' + contact.id + '',
//                        data: contact
//                    }).success(function(){
//                        deferred.resolve(contact);
//                    }).error(function(){
//                        deferred.reject('error on save');
//                    });

                    return deferred.resolve(contact);
                };

                return service;
            }
        ]);
})();

