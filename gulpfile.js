const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');

// Compile .scss into.css file:
function buildStyles() {
    return src('shinobi/**/*.scss')
        .pipe(sass())
        .pipe(purgecss({ content: ['*.html'] })) // content sees from which file you need to remove the unused styles *.html means all .html files
        .pipe(dest('css'))
}

// Watch for changes in .scss file:
function watchTask() {
    watch(['shinobi/**/*.scss', '*.html'], buildStyles) // added *.html so that when we change the utility class in the html then it will watch for html file again and purges the unused style and add the newly used utility class in the index.css file.
}

exports.default = series(buildStyles, watchTask)