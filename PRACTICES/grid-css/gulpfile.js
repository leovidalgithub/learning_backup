const gulp         = require('gulp');
const browsersync  = require('browser-sync').create();

gulp.task('browser-sync', () => {
    browsersync.init({
        server: {
            baseDir: "./"
        },
        port: 4200
    });
});

gulp.task('watch', gulp.parallel('browser-sync', function () {
    gulp.watch("./css/**/*.css").on('change', browsersync.reload);
    gulp.watch("**/*.html").on('change', browsersync.reload);
}));

gulp.task('default', gulp.series('watch'));