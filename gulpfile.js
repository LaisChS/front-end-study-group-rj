var gulp = require('gulp'), // importando o gulp
    imagemin = require('gulp-imagemin');   

gulp.task('build-img', function() {
  gulp.src('src/images/**/*') // origem - fluxo de leitura
  .pipe(imagemin())
  .pipe(gulp.dest('src/images')); // destino - fluxo de destino
});