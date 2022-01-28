const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const Pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

function browsersync() {
    browserSync.init({
        open: true,
        server: "./dist"
    })
}

function pug() {
    return gulp.src(['./src/*.pug'])
        .pipe(Pug({
            doctype: 'html',
            pretty: false
        }))
        .pipe(gulp.dest('./dist/'))
        .on('end', browserSync.reload);
}

function scss() {
  return gulp.src(['./src/assets/scss/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(['./dist/css/']))
    .pipe(browserSync.reload({stream: true}))
}

function watch() {
  gulp.watch('./src/', pug);
  gulp.watch('./src/assets/', scss);
  gulp.watch('./src/assets/', scripts);
}

function scripts() {
  return gulp.src(['./src/**/*.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(['./dist/js']))
    .on('end', browserSync.reload)
}

exports.default = gulp.series(
  gulp.parallel(pug, scss),
  gulp.parallel(browsersync, watch),
  gulp.parallel(scripts, watch)
);