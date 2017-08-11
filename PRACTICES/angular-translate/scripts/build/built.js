// #NOTE: IN ORDER TO WORK PROPERLY, IT MUST HAVE AT LEAST ONE TRANSLATION IN USE (<h1> translate>main.name</h1>)
angular.module('myApp', ['pascalprecht.translate','tmh.dynamicLocale'])
    .config(['$translateProvider','tmhDynamicLocaleProvider',
      function($translateProvider,tmhDynamicLocaleProvider) {
          // $translateProvider.translations('en',
          //     {
          //         "email": {
          //             "ok" : "Message send. Thanks!",
          //             "err" : "Oops! Your message could not be sent"
          //         }
          // });
        $translateProvider
            .registerAvailableLanguageKeys(['es-ES', 'en-US', 'ca-CA'], {
                // 'en-us': 'en-US',
                // 'en-uk': 'en-US',
                'en*': 'en-US',
                'us*': 'en-US',
                'uk*': 'en-US',
                'es*': 'es-ES',
                'ca*': 'ca-CA'
            })
            .useStaticFilesLoader({
                prefix: 'locale/lang_',
                suffix: '.json'
            })
            .preferredLanguage('es-ES')
            .fallbackLanguage('en-US') // si no se consigue alguna traducción se usrará la de este idioma
            .determinePreferredLanguage()
            .useSanitizeValueStrategy(null);
    // $translateProvider.determinePreferredLanguage(function(){
    //             let currentIdiom = (window.navigator.browserLanguage ||
    //                                 window.navigator.userLanguage ||
    //                                 window.navigator.systemLanguage ||
    //                                 window.navigator.language ||
    //                                 window.navigator.languages[0]).toLowerCase();
    //             return currentIdiom;
    // });

     // ********************** ANGULAR DYNAMIC LOCALE (tmhDynamicLocale)
        tmhDynamicLocaleProvider.localeLocationPattern('locale/angular-locale_{{locale}}.js');
        tmhDynamicLocaleProvider.defaultLocale('es-ES');
      }
    ])
    .run([function() {}])
    .controller('someController', ['$scope','$rootScope','$translate','tmhDynamicLocale','$timeout',
        function($scope,$rootScope,$translate,tmhDynamicLocale,$timeout) {
            $scope.myDate = new Date();
            $scope.myMoney = 12954;

            $timeout(function(){
                var currentIdom = $translate.use() || 'es-ES';
                $scope.currentIdiom = currentIdom;
                $translate.use(currentIdom);
            });

            //NO SE RECOMIENDA HACER LAS TRADUCCIONES EN EL CONTROLADOR
            $rootScope.$on('$translateChangeSuccess', function () { // event triggered when language has been changed
                $scope.sometext = $translate.instant('sometext');
            });
            // $scope.$on('$localeChangeSuccess', function() { ... // another event but from tmhDynamicLocale.set

            $scope.switchLanguage = function(key) {
                $translate.use(key);
                tmhDynamicLocale.set(key);
            }
            $scope.show_language = function() {
                $scope.currentLanguage = $translate.use();
            }
    }
    ]);
