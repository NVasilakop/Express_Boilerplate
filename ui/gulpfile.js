var gulp = require('gulp');

//style paths
var sassFiles = '/sass/**/*.scss',
    cssDest = 'assets/styles/css/';
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function(){
    return gulp.src('./sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch',function() {
    gulp.watch('./sass/index.scss',gulp.series(['sass']));
});