angular
    .module('myAppCV', ['pascalprecht.translate'])
    .config(['$translateProvider',function($translateProvider){
        $translateProvider
            .registerAvailableLanguageKeys(['es', 'en', 'fr'], {
                'en*': 'en',
                'uk*': 'en',
                'us*': 'en',
                'es*': 'es',
                'fr*': 'fr'
            })
            .useStaticFilesLoader({
                prefix: 'locale/lang_',
                suffix: '.json'
            })
            .preferredLanguage('en')
            .fallbackLanguage('en') // si no se consigue alguna traducción se usrará la de este idioma
            .determinePreferredLanguage( function(){
                return (window.navigator.userLanguage || window.navigator.language);
            });
    }])
    .run([function(){}])
    .controller('mainController',['$translate','$timeout','$http',function($translate,$timeout,$http){
        var vm = this;
        vm.data = {};

        $timeout(function(){
            vm.myIdiom = $translate.use();
        });

        vm.submit = function() {
            let protocol = location.protocol;
            let hostname = location.hostname;
            let url = `${protocol}//${hostname}/`;

            $http.post(url + 'contact/', vm.data)
                .then(function(data){
                })
                .catch(function(err){
                });
        };

        vm.idiomChange = function(idiom) {
            vm.myIdiom = idiom;
            $translate.use(idiom);
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
//         vm.var = myFac;
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
