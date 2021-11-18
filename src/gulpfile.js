const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('sass', function (cb) {
  gulp
    .src('app/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
  cb();
});

gulp.task('js', function (cb) {
  gulp
    .src('app/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/scripts'))
    .pipe(browserSync.stream());
  cb();
});

gulp.task('browserSync', function (done) {
  browserSync.init({
    server: {
      baseDir: 'app',
    },
  });
  done();
});

gulp.task('watch-files', function () {
  gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/js/**/*.js', gulp.series('js'));
});

gulp.task('watch', gulp.series('browserSync', 'sass', 'js', 'watch-files'));
