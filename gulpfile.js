var gulp = require('gulp'), // importando o gulp e outros plugins
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin');



gulp.task('default', ['copy'], function() {
  gulp.start('build-img', 'usemin'); 
});

gulp.task('copy', ['clean'] , function() {
  return gulp.src('src/**/*')
  .pipe(gulp.dest('dist'))  
});

gulp.task('clean', function() {
  return gulp.src('dist')
  .pipe(clean());
});

gulp.task('build-img', function() {
  gulp.src('dist/images/**/*') // origem - fluxo de leitura
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images')); // destino - fluxo de destino
});

gulp.task('usemin', function() {
  return gulp.src('dist/**/*.html')
    .pipe(usemin({
      'css' : [cssmin]
    }))
    .pipe(gulp.dest('dist'));
});