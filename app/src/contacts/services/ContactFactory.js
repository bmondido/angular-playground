(function(){
    'use strict';

    angular.module('app.contacts').
        factory('ContactFactory', ['$http','$q',
            function($http, $q){
                var service = {};

                service.getContact = function(id){
                    var deferred = $q.defer();
                    $http({
                        method: 'GET',
                        url: 'contactsData/' + id + '.json'
                    }).success(function(data){
                        deferred.resolve(data);
                    }).error(function(){
                        deferred.reject('error happen');
                    });

                    return deferred.promise;
                };

                return service;
            }
        ]);
})();

