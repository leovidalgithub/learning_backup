angular
    .module('myApp', ['ngSanitize','toggle-switch'])
    .controller('myController', ['$scope', function($scope) {
        this.var = 123654;
    }]);
