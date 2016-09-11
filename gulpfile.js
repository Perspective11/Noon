//Import the packages here
var gulp = require('gulp');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');


//Perform some tasks here


gulp.task('sass', function () {
    return gulp.src(['assets/sass/**/*.sass', 'assets/sass/**/*.scss', '!./assets/sass/**/_*.*'])
      .pipe(plumber({ errorHandler: handleError }))
      .pipe(sass())
      .pipe(autoprefixer({
          browsers: ['> 5%'],
          cascade: false
      }))
      .pipe(gulp.dest('assets/css'))
      .pipe(browserSync.stream());

});

gulp.task('css', function () {
  return gulp.src(['assets/css/*.css', '!assets/css/_*.css'])
    .pipe(plumber({ errorHandler: handleError }))
    .pipe(autoprefixer({
			browsers: ['> 5%'],
			cascade: false}))
    .pipe(gulp.dest('assets/css/'))
    .pipe(browserSync.stream());
});

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
};

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    notify: false
  })
})

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch(['assets/sass/*.sass','assets/sass/*.scss'], ['sass']);
  gulp.watch(['*.html', 'pages/*.html','admin*.html'], browserSync.reload);
  gulp.watch('assets/js/*.js', browserSync.reload);
  // Other watchers
})
