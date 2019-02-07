var gulp = require('gulp');
var rename = require('gulp-rename');

var styleSRC = './src/comp/style.css';
var styleDIST = 'dist/css/';

gulp.task('styles', function () {

    gulp.src( styleSRC )
        .pipe(rename( { suffix: 'min' } ) )
        .pipe( gulp.dest(styleDIST));

});