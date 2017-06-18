angular.module( 'controllers', [] )
	.controller ( 'myController', ['$scope', function( $scope ) {
		console.log('myController');
		$scope.myVar = 'No body calls me chicken!!!';
	}])

	// .controller ( 'myOtherController', ['$scope', function( $scope ) {
	// 	console.log('myOtherController');
	// 	$scope.myVar = 'Qué arrecho soy!';
	// }]);

	.controller( 'myOtherController', myOtherControllerFn );
	myOtherControllerFn.$inject = ['$scope'];
	function myOtherControllerFn( $scope ) {
		console.log('myOtherController');
		$scope.myVar = 'Everything works fine!!';
	};

