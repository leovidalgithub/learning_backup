angular
    .module('myAppCV', ['pascalprecht.translate','miscellaneous'])
    .config(['$translateProvider',function($translateProvider){

    $translateProvider
        .registerAvailableLanguageKeys(['es-ES', 'en-US', 'fr-FR'],{
            'en*': 'en-US',
            'us*': 'en-US',
            'uk*': 'en-US',
            'es*': 'es-ES',
            'fr*': 'fr-FR'
        })
        .useStaticFilesLoader({
            prefix: 'locale/lang_',
            suffix: '.json'
        })
        .preferredLanguage('en-US')
        .fallbackLanguage('en-US') // si no se consigue alguna traducción se usrará la de este idioma
        .determinePreferredLanguage()
        .useSanitizeValueStrategy(null);
        // $translateProvider.determinePreferredLanguage(function(){
            // let currentIdiom = (window.navigator.browserLanguage ||
            //                 window.navigator.userLanguage ||
            //                 window.navigator.systemLanguage ||
            //                 window.navigator.language ||
            //                 window.navigator.languages[0]).toLowerCase();
            //                 console.log(currentIdiom);
            //                 return currentIdiom;
        // });
    }])
    .run([function(){}])
    .controller('mainController',['$rootScope','$translate','$timeout','$http',function($rootScope,$translate,$timeout,$http){
        var vm = this;
        vm.data = {};
        // vm.data.name='Pedro';
        // vm.data.email='pdro@hotmail.com';
        // vm.data.subject= new Date();
        // vm.data.msg=' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

        $timeout(function(){
            let currentIdom = $translate.use() || 'en-US';
            vm.myIdiom = currentIdom;
            $translate.use(currentIdom);
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
