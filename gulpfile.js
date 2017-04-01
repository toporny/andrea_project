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

gulp.task('template1', function (){
  gulp.src('html_content/1column/*.html')
    .pipe(template('html_templates/template_1column.html'))
    .pipe(gulp.dest('public'));
  }
);

gulp.task('template2', function (){
  gulp.src('html_content/2columns/*.html')
    .pipe(template('html_templates/template_2columns.html'))
    .pipe(gulp.dest('public'));
  }
);

gulp.task('template3', function (){
  gulp.src('html_content/3columns/*.html')
    .pipe(template('html_templates/template_3columns.html'))
    .pipe(gulp.dest('public'));
  }
);


gulp.task('watch', function () {
  gulp.watch(['./html_content/1column/*.html','./html_content/2columns/*.html','./html_content/3columns/*.html','./html_templates/1_column.html','./html_templates/2_columns.html','./html_templates/3_columns.html'], ['template1', 'template2', 'template3']);
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./public/*', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass', 'template1', 'template2', 'template3']);

