angular.module('plunker', ['ui.bootstrap'])


.controller('ProgressDemoCtrl', function ($scope, $interval) {

    $scope.random = function() {
    var value = Math.floor((Math.random() * 100) + 1);
    var type;

    if (value < 25) {
      type = 'success';
    } else if (value < 50) {
      type = 'info';
    } else if (value < 75) {
      type = 'warning';
    } else {
      type = 'danger';
    }

    $scope.showWarning = (type === 'danger' || type === 'warning');

    $scope.dynamic = value;
    $scope.max = function(){
      return $scope.dynamic + 50;
    };
    $scope.type = type;
  };

  $scope.random();

  $interval(
    function(){
       $scope.random();
    },1000);
});
