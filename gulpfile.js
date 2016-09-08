//Import the packages here
var gulp = require('gulp');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');


//Perform some tasks here

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
  })
})

gulp.task('watch', ['browserSync', 'css'], function(){
  gulp.watch('assets/css/*.css', ['css']);
  gulp.watch('**/*.html', browserSync.reload);
  gulp.watch('assets/js/*.js', browserSync.reload);
  // Other watchers
})
