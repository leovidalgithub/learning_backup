angular.module( 'initial', [] )
	.run ( ['$location', function( $location ) {
		console.log( 'This is .run' );
		console.log( 'This App absolute Url is:' );
		console.log( $location.absUrl() );
	}])
	.config ( function() {
		console.log( 'This is .config' );
	});
