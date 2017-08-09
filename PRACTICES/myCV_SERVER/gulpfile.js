const gulp         = require( 'gulp' );
const sass         = require( 'gulp-sass' );
const minifyCSS    = require( 'gulp-csso' );
const concat       = require( 'gulp-concat' );
const uglify       = require( 'gulp-uglify' );
const autoprefixer = require( 'gulp-autoprefixer' );
const nodemon      = require( 'gulp-nodemon' );
const bs           = require( 'browser-sync' ).create();
const ngAnnotate   = require( 'gulp-ng-annotate' ); //Add angularjs dependency injection annotations
const gutil        = require( 'gulp-util' ); // to catch errors
const babel        = require( 'gulp-babel' );
// ALL OF THESE (PACKAGE.JOSN) ARE NECESSARY FOR GULP-BABEL
// "babel-core": "^6.25.0",
// "babel-loader": "^7.1.1",
// "babel-preset-env": "^1.6.0",

// ********************************* BROWSER-SYNC *********************************
gulp.task('browser-sync', ['nodemon'], function() {
  bs.init({
    proxy: "http://localhost:8080",  // local node app address
    port: 3000,  // use *different* port than above
    notify: true
  });
});

// ********************************* NODEMON *********************************
gulp.task('nodemon', function (cb) {
  var called = false;
  return nodemon({
    script: 'server.js',
    ignore: [
      'gulpfile.js',
      'node_modules/',
      'public/' // para que no recargue al modificar cualquier .js dentro de 'public'
    ],
    delay: 500
  })
  .on('start', function () {
    if (!called) {
      called = true;
      cb();
    }
  })
  .on('restart', function () {
    setTimeout(function () {
        console.log('reloading!');
        bs.reload({once: true});
    }, 500);
  });
});

// ********************************* SASS *********************************
gulp.task( 'sass', function () {
    return gulp.src( 'public/src/sass/**/*.scss' )
        .pipe( sass().on( 'error', sass.logError))
    	.pipe( concat( 'default.css' ))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe( minifyCSS())
        .pipe( gulp.dest( 'public/build/css' ))
        .pipe(bs.reload({stream: true}));
});

// ********************************* JS *********************************
gulp.task( 'js', function () {
	return gulp.src( 'public/src/js/*.js' )
		.pipe( concat( 'built.js' ))
        .pipe(ngAnnotate({add:true}))
        .pipe(babel({
            presets: ['env']
        }))
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
		.pipe( uglify() )
		.pipe( gulp.dest( 'public/build/js' ))
        .pipe(bs.reload({stream: true}));
});

// ********************************* WATCH *********************************
gulp.task( 'watch', ['browser-sync'], function() {
	gulp.watch( 'public/src/sass/**/*.scss', [ 'sass' ] );
	gulp.watch( 'public/src/js/*.js', ['js'] );
	gulp.watch( 'public/*.html' ).on('change', bs.reload);
});

// ********************************* DEFAULT TASK *********************************
gulp.task( 'default', [ 'browser-sync', 'watch' ] );

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
