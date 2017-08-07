angular
    .module('myAppCV', [])
    .config(function(){})
    .run(function(){})
    .controller('mainController',[function(){
        this.data = {};
        this.myIdiom = 'en';
        this.submit = function() {
        };
        this.idiomChange = function(idiom) {
            this.myIdiom = idiom;
        };
    }])
    .factory('myFactory',[function(){
        return {
            fn : function() {
                return 'Pajúo';
            }
        };
    }]);







// angular
//     .module('myCV', ['modulo'])
//     .config(function(){})
//     .run(function(){})
//     .controller('mainController',['$scope','myFac', function($scope,myFac){
//         this.var = myFac;
//     }]);
// angular
//     .module('modulo', ['modulo2'])
//     .config(function(){})
//     .run(function(){})
//     .value('myValue','*VALUE*')
//     .factory('myFac',['myValue','myValue2',function(myValue,myValue2){
//         return myValue + ' Factory' + myValue2;
//     }]);
// angular
//     .module('modulo2', [])
//     .value('myValue2','*VALUE2*')
//     .factory('myFac',['myValue',function(myValue){
//         return myValue + ' Factory';
//     }]);
