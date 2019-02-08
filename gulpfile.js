var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var babel = require('gulp-babel');
var hash = require('gulp-hash-filename');

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: '/'
        },
    })
});

gulp.task('sass', function () {
    return gulp.src('css/**/*.css') // Gets all files ending with .scss in app/scss
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('useref', function () {
    return gulp.src(['*.html'])
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
    return gulp.src('js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('lib', function () {
    return gulp.src('lib/*.js')
        .pipe(gulp.dest('dist/lib'));
});

// Compress all images and move them to /dist/images
gulp.task('images', function () {
    return gulp.src('img/**/*.+(png|jpg|jpeg|gif|svg)')
        // Caching images that ran through imagemin
        // .pipe(cache(imagemin({
        //     interlaced: true
        // })))
        .pipe(gulp.dest('dist/img'));
});

// Moves all fonts into /dist folder
gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'));
});

// Gulp will delete the `dist` folder for you whenever gulp clean:dist is run.
gulp.task('clean:dist', function () {
    return del.sync('dist');
});



gulp.task('watch', ['browser-sync'], function () {
    gulp.watch('css/**/*.css', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['useref', 'js', 'css', 'lib', 'images', 'fonts'],
        callback
    )
});

gulp.task('default', function (callback) {
    runSequence(['browser-sync', 'watch'],
        callback
    )
});