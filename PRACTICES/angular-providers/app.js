angular.module('angularApp', [])

        .provider('provider', function() {
            this.$get = function() {
                console.log('this.$get called once');
                return 'This Value PROVIDER';
            }
        })
        .provider('provider2', function() {
            this.$get = function() {
                return {
                    myFn : function(){return 'console.log message'}
                };
            }
        })
        .factory('myFactory', function() {
            console.log('Factory function called too');
            return "This Value FACTORY";
        })
        .value('clientId','a123456321x')
        .factory('apiTokenFactory', ['clientId', function(clientId) {
            var encryp = function(data1,data2) {
                return (data1 + ':' + data2).toUpperCase();
            }
            window.localStorage.setItem('myApp','importanInfo');
            var secret = window.localStorage.getItem('myApp');
            var apiToken = encryp(clientId,secret);
            return apiToken;
        }])

        .factory('unicornLauncher', ["apiTokenFactory", function(apiTokenFactory) {
            function UnicornLauncher(apiTokenFactory) {
                this.launchedCount = 0;
                this.launch = function() {
                    this.launchedCount++;
                    return 'launchedCount = ' + this.launchedCount;
                }
            }
            return new UnicornLauncher(apiTokenFactory);
        }])

        .controller('controller1', function($scope, provider, myFactory, clientId) {
            console.log('C1 ' + provider);
            console.log('C1 ' + myFactory);
            this.clientId = clientId;
        })
        .controller('controller2', function($scope, provider, myFactory, apiTokenFactory, unicornLauncher,provider2) {
            console.log('C2 ' + provider);
            console.log('C2 ' + myFactory);
            console.log(apiTokenFactory);
            console.log(unicornLauncher.launch());
            $scope.myFunction = function() {
                console.log(provider2.myFn());
            };
        });
