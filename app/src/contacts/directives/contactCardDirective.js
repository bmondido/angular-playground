(function(){
    'use strict';

    angular.module('app.contacts').
        directive('contactCard', function(){
            return {
                //make it an HTML element
                restrict: 'E',
                //allow the directive to access parent scope
                transclude: true,
                templateUrl: 'src/contacts/directives/contact-card.html'
            };
        });
})();