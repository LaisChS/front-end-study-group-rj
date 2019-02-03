var gulp = require('gulp'), // importando o gulp e outros plugins
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean');


gulp.task('copy', ['clean'] , function() {
  return gulp.src('src/**/*')
  .pipe(gulp.dest('dist'))  
});

gulp.task('clean', function() {
  return gulp.src('dist')
  .pipe(clean());
});

gulp.task('build-img', ['copy'], function() {
  gulp.src('dist/images/**/*') // origem - fluxo de leitura
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images')); // destino - fluxo de destino
});