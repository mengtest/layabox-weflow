var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var notify = require('gulp-notify');

gulp.task('libs', function () {
    return gulp.src(['bin/libs/laya.core.js', 'bin/libs/laya.webgl.js', 'bin/libs/laya.ui.js'])
    .pipe(concat('libs.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('bin/build'))
    .pipe(notify({ message: 'js task ok' }));
});

gulp.task('js', function() {
	return gulp.src('bin/js/*.js')
    .pipe(concat('main.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('bin/build'))
    .pipe(notify({ message: 'js task ok' }));
});

gulp.task('ui', function () {
    return gulp.src(['bin/js/ui/*.js'])
    .pipe(concat('ui.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('bin/build'))
    .pipe(notify({ message: 'js task ok' }));
});

gulp.task('default',['libs', 'js', 'ui']);