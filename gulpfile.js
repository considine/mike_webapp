"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');


gulp.task("concatScripts", function () {
  gulp.src([
    'app/scripts/snap.min.js',
    'app/scripts/angular-snap.min.js',
    'public/scripts/todo.bundle.js',
    'app/scripts/maps/map_insert.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('public/scripts'));

  gulp.src([
    'app/scripts/jquery/jquery.js',
    'app/scripts/jquery/jquery-ui.js',
    'app/scripts/jquery/datepicker.js'
  ])
  .pipe(maps.init())
  .pipe(concat('jquery.js'))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('public/scripts'));
});


gulp.task('minifyScripts', function () {
  gulp.src('public/scripts/jquery.js')
  .pipe(uglify())
  .pipe(gulp.dest('public/scripts'))
});

gulp.task('compileSass', function () {
  gulp.src("app/sass/applications.scss")
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write('./')) // Relative to the output directory
  .pipe(gulp.dest('public/styles'));
});
