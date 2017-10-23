const gulp         = require( 'gulp' );
const sass         = require( 'gulp-sass' );
const minifyCSS    = require( 'gulp-csso' );
const concat       = require( 'gulp-concat' );
const uglify       = require( 'gulp-uglify' );
const autoprefixer = require( 'autoprefixer' ); // autoprefixer
const postcss      = require( 'gulp-postcss' ); // autoprefixer
const bs           = require( 'browser-sync' ).create();
const gutil        = require( 'gulp-util' ); // to catch errors

// ********************************* BROWSER-SYNC *********************************
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

// ********************************* SASS *********************************
gulp.task( 'sass', function () {
    return gulp.src( 'src/**/*.scss' )
        .pipe( sass().on( 'error', sass.logError))
    	.pipe( concat( 'default.css' ))
        .pipe(postcss([ autoprefixer({ browsers: ["> 0%"] }) ]))
        .pipe( minifyCSS())
        .pipe( gulp.dest( 'build' ))
        .pipe(bs.reload({stream: true}));
});

// ********************************* JS *********************************
gulp.task( 'js', function () {
	return gulp.src( 'src/*.js' )
		.pipe( concat( 'built.js' ))
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
		.pipe( uglify() )
		.pipe( gulp.dest( 'build' ))
        .pipe(bs.reload({stream: true}));
});

 // ********************************* VENDOR:CSS *********************************
gulp.task( 'vendor:css', function () {
	return gulp.src( ['public/src/vendor/css/flexslider.css',
					  'public/src/vendor/css/flags.min.css'] )
		.pipe( concat( 'vendor.css' ))
        // .pipe( minifyCSS())
        .pipe( gulp.dest( 'public/build/vendor/css' ));
});

 //********************************* VENDORS JS (angular, jquery, bootstrap)
gulp.task( 'vendor:js', function () {
	return gulp.src( [
                'public/src/vendor/js/jquery-2.2.4.min.js',
                'public/src/vendor/js/angular.min.js',
                'public/src/vendor/js/angular-sanitize.min.js',
                'public/src/vendor/js/angular-translate.min.js',
                'public/src/vendor/js/angular-translate-loader-static-files.min.js',
                'public/src/vendor/js/waypoint/jquery.waypoints.min.js',
                'public/src/vendor/js/jquery.fittext.js',
                'public/src/vendor/js/parallax.min.js',
                'public/src/vendor/js/jquery.flexslider-min.js',
                    ])
		.pipe( concat( 'vendor.js' ))
		// .pipe( uglify() )
		.pipe( gulp.dest( 'public/build/vendor/js' ))
});

// ********************************* WATCH *********************************
gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('src/**/*.scss', ['sass']);
    gulp.watch('src/*.js', ['js']);
    gulp.watch('*.html').on('change', bs.reload);
});

// ********************************* DEFAULT TASK *********************************
gulp.task('default', ['browser-sync', 'watch']);
