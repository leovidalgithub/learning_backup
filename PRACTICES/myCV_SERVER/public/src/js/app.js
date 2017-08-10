angular
    .module('myAppCV', ['pascalprecht.translate','tmh.dynamicLocale','miscellaneous'])
    .config(['$translateProvider',function($translateProvider){

    $translateProvider
        .registerAvailableLanguageKeys(['es-ES', 'en-US', 'fr-FR'],{
            'en*': 'en-US',
            'us*': 'en-US',
            'uk*': 'en-US',
            'es*': 'es-ES',
            'fr*': 'fr-FR'
        });
        $translateProvider.useStaticFilesLoader({
            prefix: 'locale/lang_',
            suffix: '.json'
        });

        // $translateProvider.preferredLanguage('es-ES');
        $translateProvider.fallbackLanguage('en-US'); // si no se consigue alguna traducción se usrará la de este idioma
        $translateProvider.determinePreferredLanguage();
        $translateProvider.useSanitizeValueStrategy(null);


        // .determinePreferredLanguage()
        // .fallbackLanguage('en')
        // .preferredLanguage('en')

            // $translateProvider.translations('en',
            //     {
            //         "email": {
            //             "ok" : "Message send. Thanks!",
            //             "err" : "Oops! Your message could not be sent"
            //         },
            //         "test": "Testing one, two, three",
            //         "main": {
            //             "thing" : "More things"
            //         }
            // });
            // $translateProvider.translations('es',
            //     {
            //         "email": {
            //             "ok" : "Mensaje enviado. Gracias!",
            //             "err" : "Oh! Tu mensaje no pudo enviarse"
            //         },
            //         "test": "Probando uno, dos, tres",
            //         "main": {
            //             "thing" : "Más cosas"
            //         }
            // });
            // // $translateProvider.preferredLanguage('en');
            // $translateProvider.fallbackLanguage('en');
            // // $translateProvider.determinePreferredLanguage();
            // $translateProvider.determinePreferredLanguage(function(){
            //                     let currentIdiom = (window.navigator.browserLanguage ||
            //                                     window.navigator.userLanguage ||
            //                                     window.navigator.systemLanguage ||
            //                                     window.navigator.language ||
            //                                     window.navigator.languages[0]).toLowerCase();
            //                                     console.log(currentIdiom);
            //                                     return currentIdiom;
            // });


            // $translateProvider.preferredLanguage('en');
//             .fallbackLanguage('en') // si no se consigue alguna traducción se usrará la de este idioma
//             .useSanitizeValueStrategy(null)
//             .determinePreferredLanguage( function(){
//                 let currentIdiom = (window.navigator.browserLanguage ||
//                                 window.navigator.userLanguage ||
//                                 window.navigator.systemLanguage ||
//                                 window.navigator.language ||
//                                 window.navigator.languages[0]).toLowerCase();
//                 // if(currentIdiom.indexOf('es') > -1) $translateProvider.use('es');
//                 // if(currentIdiom.indexOf('sp') > -1) $translateProvider.use('es');
//                 // if(currentIdiom.indexOf('en') > -1) $translateProvider.use('en');
//                 // if(currentIdiom.indexOf('us') > -1) $translateProvider.use('en');
//                 // if(currentIdiom.indexOf('uk') > -1) $translateProvider.use('en');
//                 // if(currentIdiom.indexOf('fr') > -1) $translateProvider.use('fr');
// console.log(currentIdiom);
//                 $translateProvider.use(currentIdiom);
//             });
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
            console.log('idiom',vm.myIdiom);
            // $translate.use('es-ES');
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
