var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path');

gulp.task('default', function() {
    gulp.run('less-boostrap');    
    gulp.run('less-font-awesome');    
});

gulp.task('less-boostrap', function() {
    return gulp.src('./frontend/src/less/bootstrap/bootstrap.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./frontend/dist/css/'));
});

gulp.task('less-font-awesome', function() {
    return gulp.src('./frontend/src/less/font-awesome/font-awesome.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./frontend/dist/css/'));
});