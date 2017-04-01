var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var template = require('gulp-template-html');

gulp.task('connect', function(){
  connect.server({
    root: 'public',
    livereload: true
  });
});

// keeps gulp from crashing for scss errors
gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
      .pipe(sass({ errLogToConsole: true }))
      .pipe(gulp.dest('./public/css'))
      .pipe(connect.reload());
});

gulp.task('livereload', function (){
  gulp.src('./public/**/*')
  .pipe(connect.reload());
});

gulp.task('template', function (){

 gulp.src('html_content/*.html')
      .pipe(template('html_templates/template.html'))
      .pipe(gulp.dest('public'));
});


gulp.task('watch', function () {
  gulp.watch(['./html_content/**/*.html','./html_templates/**/*.html'], ['template']);
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/*', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass', 'template']);

