var gulp      = require( 'gulp' );
var sass      = require( 'gulp-sass' );
var minifyCSS = require( 'gulp-csso' );
var concat    = require( 'gulp-concat' );
var uglify    = require( 'gulp-uglify' );

//********************************* SASS
gulp.task( 'sass', function () {
  return gulp.src( 'lib/sass/**/*.scss' )
    .pipe( sass().on( 'error', sass.logError))
	.pipe( concat( 'style.css' ))
    .pipe( minifyCSS())
    .pipe( gulp.dest( 'lib/css' ));
});
 
//********************************* JS
gulp.task( 'js', function () {
	return gulp.src( 'app/js/source/*.js' )
		.pipe( concat( 'built.js' ))
		.pipe( uglify() )
		.pipe( gulp.dest( 'app/js/build/' ))
});

//********************************* WATCH SASS & JS
gulp.task( 'watch', function() {
	gulp.watch( 'app/js/source/*.js', [ 'js' ] );
	gulp.watch( 'lib/sass/**/*.scss', [ 'sass' ] );
});


//********************************* VENDORS JS (angular, jquery, bootstrap)
gulp.task( 'vendors', function () {
	return gulp.src( ['bower_components/jquery/dist/jquery.min.js',
						'bower_components/angular/angular.min.js',
						'bower_components/bootstrap/dist/js/bootstrap.min.js'] )
		.pipe( concat( 'vendors.js' ))
		.pipe( uglify() )
		.pipe( gulp.dest( 'bower_components/' ))
});

// gulp.task( 'all', [ 'sass', 'vendors', 'js', 'watch' ]);
