angular
    .module('myApp',['jQueryScrollbar'])

    .controller('myController',['$scope',function($scope){

        $scope.var = 'jQuery CSS Customizable Scrollbar';

        $scope.jqueryScrollbarOptions = {
            "onScroll":function(y, x) {
                if(y.scroll == y.maxScroll){
                }
            }
        };

    }]);
