(function(){
    angular('app.contacts').
        directive('contactForm', function(){
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: 'src/contacts/directives/contact-form.html'
            }
        })
});
