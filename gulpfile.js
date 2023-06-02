const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Compile .scss into.css file:
function buildStyles() {
    return src('shinobi/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

// Watch for changes in .scss file:
function watchTask() {
    watch(['shinobi/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)