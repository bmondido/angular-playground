(function(){
    'use strict';

    angular.module('app.contacts').
        factory('ContactFactory', ['$http','$q',
            function($http, $q){
                var service = {};
                var contacts = [];

                service.getContacts = function(){
                    //familiar promises
                    var deferred = $q.defer();
                    //load them from the .json file first and never again for example purposes
                    if(contacts.length > 0){
                        deferred.resolve(contacts);
                    } else {
                        $http({
                            method: 'GET',
                            //call the appropriate API
                            url: 'contactsData/allContacts.json'
                        }).success(function(data){
                            contacts = data.contacts;
                            deferred.resolve(contacts);
                        }).error(function(){
                            deferred.reject('error on get');
                        });
                    }


                    return deferred.promise;
                };

                service.getContact = function(id){
                    var deferred = $q.defer();
                    var targetContact = {};
                    angular.forEach(contacts, function(contact){
                        if(contact.id === id){
                            targetContact = contact;
                        }
                    });

                    deferred.resolve(targetContact);

                    //if actually posting to the server
                    //$http({
                    //    method: 'GET',
                    //    url: 'contactsData/' + id + '.json'
                    //}).success(function(data){
                    //    deferred.resolve(data);
                    //}).error(function(){
                    //    deferred.reject('error on get');
                    //});

                    return deferred.promise;
                };

                service.saveContact = function(newContact){
                    if(newContact.image === undefined){
                        newContact.image = 'contactsData/awesome.jpg';
                    }
                    var deferred = $q.defer();
                    var exists = false;
                    for(var i = 0; i < contacts.length; i++){
                        if(!exists && newContact.id === contacts[i].id){
                            contacts[i] = newContact;
                            exists = true;
                        }
                    }
                    if(!exists){
                        newContact.id=contacts.length;
                        contacts.push(newContact);
                    }
                    //no need to post to a server. just put it in the contacts array
//                    $http({
//                        method: 'POST',
//                        url: 'contactsData/' + contact.id + '',
//                        data: contact
//                    }).success(function(){
//                        deferred.resolve(contact);
//                    }).error(function(){
//                        deferred.reject('error on save');
//                    });


                    return deferred.resolve(newContact);
                };

                return service;
            }
        ]);
})();

