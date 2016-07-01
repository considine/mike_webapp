"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


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
  .pipe(concat('jquery.js'))
  .pipe(gulp.dest('public/scripts'));
});
