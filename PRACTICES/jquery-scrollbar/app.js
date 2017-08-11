angular
    .module('myApp',['jQueryScrollbar'])

    .controller('myController',['$scope',function($scope){

        $scope.var = 'jQuery CSS Customizable Scrollbar';

        $scope.jqueryScrollbarOptions = {
            'showArrows' : true
            // "onScroll":function(y, x) {
            //     if(y.scroll == y.maxScroll){}
            // }
        };

    }]);
