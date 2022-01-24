const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const image = require('gulp-image');

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

gulp.task('build-sass', function (cb) {
  gulp
    .src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css'));

  gulp
    .src(['css/*.css', '!css/styles.css'])
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css'));

  cb();
});

gulp.task('optimize-images', function (cb) {
  gulp.src('images/**/*').pipe(image()).pipe(gulp.dest('build/images'));
  cb();
});

gulp.task('build-js', function (cb) {
  gulp
    .src('js/*.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'));

  gulp
    .src(['scripts/*.js', '!scripts/all.js'])
    .pipe(gulp.dest('build/scripts'));

  cb();
});

gulp.task('copy-fonts', function (cb) {
  gulp.src('fonts/**/*').pipe(gulp.dest('build/fonts'));

  cb();
});

gulp.task('copy-html', function (cb) {
  gulp.src('*.html').pipe(gulp.dest('build/'));
  gulp.src('en/*.html').pipe(gulp.dest('build/en/'));

  cb();
});

gulp.task('watch', gulp.series('browserSync', 'sass', 'js', 'watch-files'));
gulp.task(
  'build',
  gulp.series(
    'copy-html',
    'build-sass',
    'build-js',
    'copy-fonts',
    'optimize-images'
  )
);
