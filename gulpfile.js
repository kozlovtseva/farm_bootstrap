var gulp = require('gulp');
var scss = require('gulp-scss');
var watch = require('gulp-watch');
var csso = require('gulp-csso'); // Минификация CSS
var imagemin = require('gulp-imagemin'); // Минификация изображений
var uglify = require('gulp-uglify'); // Минификация JS
var autoprefixer = require('gulp-autoprefixer'); //автопрефиксы
var browserSync = require('browser-sync').create();

gulp.task('serve', ['scss'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("style.scss", ['scss']);
    gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('scss', function() {
    return gulp.src("style.scss")
        .pipe(scss())
        .pipe(gulp.dest("./"))
        .pipe(browserSync.stream());
});

gulp.task('build', function() {
    // css
    gulp.src('style.css') 
    .pipe(autoprefixer()) // добавляем префиксы 
    .pipe(csso()) // минимизируем css
    .pipe(gulp.dest('build')) // записываем css

    // js
    gulp.src(['script.js'])
        .pipe(uglify())
        .pipe(gulp.dest('build'));

    // image
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))

});

gulp.task('default', ['serve']);