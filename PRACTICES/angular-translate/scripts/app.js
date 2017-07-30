angular.module('myApp', ['pascalprecht.translate','tmh.dynamicLocale'])
    .config(['$translateProvider','tmhDynamicLocaleProvider',
      function($translateProvider,tmhDynamicLocaleProvider) {

        $translateProvider
            .registerAvailableLanguageKeys(['es-ES', 'en-US', 'ca-CA'], {
                'en-us': 'en-US',
                'en-uk': 'en-US',
                'en': 'en-US',
                'es': 'es-ES',
                'ca': 'ca-CA'
            })
            .useStaticFilesLoader({
                prefix: 'locale/lang_',
                suffix: '.json'
            })
            .preferredLanguage('es-ES')
            .fallbackLanguage('en-US') // si no se consigue alguna traducción se usrará la de este idioma
            .determinePreferredLanguage( function(){
                return (window.navigator.userLanguage || window.navigator.language).toLowerCase();
            });
    // ********************** ANGULAR DYNAMIC LOCALE (tmhDynamicLocale)
        tmhDynamicLocaleProvider.localeLocationPattern('locale/angular-locale_{{locale}}.js');
        tmhDynamicLocaleProvider.defaultLocale('es-ES');

      }
    ])

    // .run(['$translate',
    //   function($translate) {
    //       $translate.use('ca');
    //   }
    // ])

    .controller('someController', ['$scope','$rootScope','$translate','tmhDynamicLocale',
        function($scope,$rootScope,$translate,tmhDynamicLocale) {
            $scope.myDate = new Date();
            $scope.myMoney = 12954;

            //NO SE RECOMIENDA HACER LAS TRADUCCIONES EN EL CONTROLADOR
            $rootScope.$on('$translateChangeSuccess', function () { // event triggered when language has been changed
                $scope.sometext = $translate.instant('sometext');
            });
            // $scope.$on('$localeChangeSuccess', function() { ... // another event from tmhDynamicLocale.set

            $scope.switchLanguage = function(key) {
                $translate.use(key);
                tmhDynamicLocale.set(key);
            }
            $scope.show_language = function() {
                $scope.currentLanguage = $translate.use();
            }
    }
    ]);
