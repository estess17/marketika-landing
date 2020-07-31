const gulp = require('gulp');
const sass = require('gulp-sass');
const gulpStylelint = require('gulp-stylelint');
// const browserSync = require('browser-sync'); use localServer ext

function style() {
    return gulp.src('./scss/**/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./css'))
}

function lintCss() {
    return gulp.src('./scss/**/*.scss')
      .pipe(gulpStylelint({
        reporters: [
          {formatter: 'string', console: true}
        ]
      }));
}

function watch() {
    gulp.watch('./scss/**/*.scss', style)
}

exports.style = style;
exports.lintCss = lintCss;
exports.watch = watch;
