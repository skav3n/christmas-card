'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify');


var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-jsmin');
var fontmin = require('gulp-fontmin');

var jshint = require('gulp-jshint');
var htmlhint = require("gulp-htmlhint");
var csslint = require('gulp-csslint');
var usemin = require('gulp-usemin');

var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();

var path = require('path');
var minifyHtml = require('gulp-minify-html');

var uglify = require('gulp-uglify');  
var rename = require('gulp-rename');



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

gulp.task('scripts', function() {
  return gulp.src('./app/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('styles', function() {
  return gulp.src('./app/**/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/styles/'));
});

gulp.task('html', function() {
  return gulp.src('./app/*.html')
    .pipe(concat('index.html'))
    .pipe(gulp.dest('dist/'));
});

// script paths
// var jsFiles = './app/styles/**/*.css',  
//     jsDest = 'dist/styles';

// gulp.task('styles', function() {  
//     return gulp.src(jsFiles)
//         .pipe(concat('styles.css'))
//         .pipe(gulp.dest(jsDest))
//         .pipe(rename('styles.min.css'))
//         .pipe(cssmin())
//         .pipe(gulp.dest(jsDest));
// });


// gulp.task('usemin', ['jshint', 'csshint'], function() {
//   return gulp.src('./app/*.html')
//     .pipe(usemin({
//       css: [ cssmin() ],
//       // bootstrap: [ cssmin() ],
//       // ieOnly: [ cssmin() ],
//       html: [ minifyHtml({ empty: true }) ],
//       js: [ jsmin() ],
//       // jquery: [ jsmin() ]
//     }))
//     .pipe(gulp.dest('dist/'));
// });

// gulp.task('jshint', function() {
//     return gulp.src(['./app/scripts/*.js', '!js/*.min.js'])
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// gulp.task('csshint', function() {
//     return gulp.src('./app/styles/*.css')
//         .pipe(csslint.reporter())
//         .pipe(csslint.reporter('fail'));
// });

// gulp.task('htmlhint', function() {
//     return gulp.src("./app/*.html")
//         .pipe(htmlhint())
//         .pipe(htmlhint.failReporter())
// });


gulp.task('fonts', function () {
    return gulp.src(['./app/fonts/**/*.{ttf,woff,eof,svg}'])
        .pipe(fontmin())
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('copy', function() {
    /*
    gulp.src(['css/fonts/**//*.{ttf,woff,eof,svg}'])
        .pipe(gulp.dest('dist/css/fonts'));
    */
    gulp.src(['./app/images/**/*.png','./app/images/**/*.jpg','./app/images/**/*.gif','./app/images/**/*.jpeg', './app/images/**/*.svg'])
        .pipe(gulp.dest('dist/images/'));
    /*
    gulp.src(['*.json'])
        .pipe(gulp.dest('dist'));
    */
});

gulp.task('build', ['scripts', 'styles', 'html', 'copy', 'fonts']);

//default tasks
//gulp.task('build', function (callback) {
//    runSequence('clean', 'sass', 'usemin', 'htmlmin', ['imagemin', 'copyfonts', 'copy'], callback);
//});