const gulp         = require( 'gulp' );
const concat       = require( 'gulp-concat' );
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
// ********************************* JS *********************************
gulp.task( 'js', function () {
	return gulp.src( 'scripts/*.js' )
		.pipe( concat( 'built.js' ))
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
		.pipe( gulp.dest( 'scripts/build' ))
        .pipe(bs.reload({stream: true}));
});

// ********************************* WATCH *********************************
gulp.task( 'watch', ['browser-sync'], function() {
	gulp.watch( 'scripts/*.js', ['js'] );
	gulp.watch( '*.html' ).on('change', bs.reload);
});

// ********************************* DEFAULT TASK *********************************
gulp.task( 'default', [ 'browser-sync', 'watch' ] );
