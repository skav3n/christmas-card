'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util');



//compile less to css
gulp.task('sass', function () {
    return gulp.src('./app/styles/main.scss')
        .pipe(plumber(function (err) {
            gutil.log(err.message);
            this.emit('end');
        }))
        .pipe(sass())
        .pipe(gulp.dest('./app/styles/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

//watch for changes
gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('./app/styles/*.scss', ['sass']);
    gulp.watch('{./app/*.html,./app/scripts/*.js,./app/styles/*.css}', browserSync.reload);
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './app'
        }
    })
});

//default tasks
//gulp.task('build', function (callback) {
//    runSequence('clean', 'sass', 'usemin', 'htmlmin', ['imagemin', 'copyfonts', 'copy'], callback);
//});