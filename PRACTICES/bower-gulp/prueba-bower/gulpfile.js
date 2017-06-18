var gulp      = require('gulp');
var sass      = require('gulp-sass');
var minifyCSS = require('gulp-csso');
var concat    = require('gulp-concat');
var uglify    = require('gulp-uglify');
var jshint    = require('gulp-jshint');

//*********************************************************************
//*********************************************************************

gulp.task('sass', function () {
  return gulp.src('./css/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./css/sass/**/*.scss', ['sass']);
});

//*********************************************************************
//*********************************************************************

gulp.task('js', function () {
	gulp.src('js/source/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('todo.js'))
		.pipe(uglify())
		.pipe(gulp.dest('js/build/'))
});

gulp.task('js:watch', function () {
  gulp.watch('js/source/*.js', ['js']);
});

