var gulp      = require( 'gulp' );
var sass      = require( 'gulp-sass' );
var minifyCSS = require( 'gulp-csso' );
var concat    = require( 'gulp-concat' );
var connect   = require( 'gulp-connect' );
var uglify    = require( 'gulp-uglify' );

//********************************* SASS
gulp.task( 'sass', function () {
  return gulp.src( 'sass/**/*.scss' )
    .pipe( sass().on( 'error', sass.logError))
	.pipe( concat( 'default.css' ))
    .pipe( minifyCSS())
    .pipe( gulp.dest( 'css' ))
    .pipe( connect.reload() );
});

//********************************* WATCH
gulp.task( 'watch', function() {
	gulp.watch( 'sass/**/*.scss', [ 'sass' ] );
});

//********************************* CONNECT
gulp.task( 'connect', function () {
    connect.server({
        root: '',
        port: 8080,
        livereload: true,
        fallback: 'index.html'
    });
});

// //********************************* JS
// gulp.task( 'js', function () {
// 	return gulp.src( 'app/js/source/*.js' )
// 		.pipe( concat( 'built.js' ))
// 		.pipe( uglify() )
// 		.pipe( gulp.dest( 'app/js/build/' ))
// });
//
// //********************************* VENDORS JS (angular, jquery, bootstrap)
// gulp.task( 'vendors', function () {
// 	return gulp.src( ['bower_components/jquery/dist/jquery.min.js',
// 						'bower_components/angular/angular.min.js',
// 						'bower_components/bootstrap/dist/js/bootstrap.min.js'] )
// 		.pipe( concat( 'vendors.js' ))
// 		.pipe( uglify() )
// 		.pipe( gulp.dest( 'bower_components/' ))
// });

gulp.task( 'start',   [ 'connect', 'watch' ] );