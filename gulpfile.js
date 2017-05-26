var gulp = require('gulp'),
    sass = require('gulp-sass'),

    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();


gulp.task('sass', function(){
    gulp.src('./scss/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }));
});

gulp.task('sass:watch', function(){
    gulp.watch('./scss/*.scss',['sass']);
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });
});


gulp.watch('build/**/*').on('change', browserSync.reload);