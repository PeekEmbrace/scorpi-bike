const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', function (cb) {
  gulp
    .src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
  cb();
});

gulp.task('js', function (cb) {
  gulp
    .src('js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('scripts'))
    .pipe(browserSync.stream());
  cb();
});

gulp.task('browserSync', function (done) {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  done();
});

gulp.task('watch-files', function () {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
  gulp.watch('**/*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js', gulp.series('js'));
});

gulp.task('watch', gulp.series('browserSync', 'sass', 'js', 'watch-files'));
gulp.task('build', function (cb) {
  gulp
    .src(['css', 'en', 'scripts', 'images', 'fonts', '*.html'])
    .pipe(gulp.dest('build'));

  cb();
});
