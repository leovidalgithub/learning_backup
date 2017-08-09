angular
    .module('myAppCV', ['pascalprecht.translate','miscellaneous'])
    .config(['$translateProvider',function($translateProvider){
        $translateProvider
            .registerAvailableLanguageKeys(['es', 'en', 'fr'], {
                'en*': 'en',
                'uk*': 'en',
                'us*': 'en',
                'es*': 'es',
                'fr*': 'fr',
                'en': 'en',
                'uk': 'en',
                'us': 'en',
                'es-ES': 'es',
                'fr': 'fr'
            })
            .useStaticFilesLoader({
                prefix: 'locale/lang_',
                suffix: '.json'
            })
            // .preferredLanguage('en')
            // .use('fr');
            .determinePreferredLanguage();
//             .determinePreferredLanguage( function(){
//                 console.log((window.navigator.userLanguage || window.navigator.language));
//                 // console.log(window.navigator.browserLanguage);
//                 // console.log(window.navigator.userLanguage);
//                 // console.log(window.navigator.systemLanguage);
//                 // console.log(window.navigator.language);
// return (window.navigator.userLanguage || window.navigator.language);
//                 // return 'es';
//             })
            // .fallbackLanguage('en'); // si no se consigue alguna traducción se usrará la de este idioma
    }])
    .run([function(){}])
    .controller('mainController',['$rootScope','$translate','$timeout','$http',function($rootScope,$translate,$timeout,$http){
        var vm = this;
        vm.data = {};
        vm.data.name='Pedro';
        vm.data.email='pdro@hotmail.com';
        vm.data.subject= new Date();
        vm.data.msg=' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

        $timeout(function(){
            vm.myIdiom = $translate.use();
        });

        vm.submit = function() {
            vm.data.sending = true;
            let protocol = location.protocol;
            let hostname = location.hostname;
            let status = '';
            // let url = `${protocol}//${hostname}/`; // for production
            let url = `${protocol}//${hostname}:8080/`; // for development

            $http.post(url + 'contact/', vm.data)
                .then((data) => {
                    if(data.data.success) {
                        status = 'ok';
                        vm.data = {};
                    } else {
                        status = 'error';
                    }
                })
                .catch((err)=> status = 'error' )
                .finally(() => {
                    $rootScope.$broadcast( 'showThisAlertPlease', { type : status } );
                    vm.data.sending = false
                });
        };

        vm.idiomChange = function(idiom) {
            vm.myIdiom = idiom;
            $translate.use(idiom);
        };

    }]);
