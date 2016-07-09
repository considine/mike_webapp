"use strict";

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  maps = require('gulp-sourcemaps'),
  del = require('del');

gulp.task("concatScriptsAngular", function () {

  return gulp.src([
    'app/scripts/snap.min.js',
    'app/scripts/angular-snap.min.js',
    'public/scripts/todo.bundle.js',
    'app/scripts/maps/map_insert.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('public/scripts'));


});

//todo add this to pipeline
gulp.task("concatScriptsJquery", function () {
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


gulp.task('minifyScripts', ['concatScriptsAngular'], function () {
  gulp.src('public/scripts/jquery.js')
  .pipe(uglify())
  .pipe(gulp.dest('public/scripts'))
});


// fix "compileSass"
gulp.task('watchSass', function () {
  //globbign patterns
  gulp.watch('scss/**/*.scss', ['compileSass']);
});

gulp.task('compileSass', function () {
  gulp.src("app/sass/applications.scss")
  .pipe(maps.init())
  .pipe(sass())
  .pipe(maps.write('./')) // Relative to the output directory
  .pipe(gulp.dest('public/styles'));
});

gulp.task('clean', function () {
  del (['dist']);
});


gulp.task('build', ['minifyScripts']);



gulp.task('deployBuild', ['minifyScripts'], function () {
  //move relevant files to its own directory
  //todo: make sure all css files compile into only one
  return gulp.src(["public/styles/stylesheet.css", "public/scripts/**", "public/img/**/*"], {base: './'})
  .pipe(gulp.dest('dist'));
});


// gulp start will changei n gulp 4
gulp.task('default', ['clean'], function () {
  gulp.start('deployBuild');
})
