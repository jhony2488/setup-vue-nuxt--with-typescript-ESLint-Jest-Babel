const gulp = require('gulp')
const concat = require('gulp-concat')
const imagemin = require('gulp-imagemin')
// minifyCss = require('gulp-clean-css'),
const svgmin = require('gulp-svgmin')
const uglifyJs = require('gulp-uglify-es').default
// clean = require('gulp-clean')

gulp.task('img', () => {
  const svgOrigin = ['/assets/images/***.svg']
  const directoryProject = ['/assets/images/***']
  const directoryBuiLd = '/assets/images/'

  gulp.src(svgOrigin).pipe(svgmin()).pipe(gulp.dest(directoryBuiLd))
  return gulp
    .src(directoryProject)
    .pipe(imagemin())
    .pipe(gulp.dest(directoryBuiLd))
})

gulp.task('js', () => {
  const srcJs = [
    'static/scripts/js/html5Shiv.js',
    'static/scripts/js/respond.js',
    'static/scripts/js/selectivizr.js',
    'static/scripts/js/acessibilidade.js',
    'static/scripts/js/jquery.js',
  ]
  const distJs = ['static/scripts/js/']
  gulp
    .src([srcJs[0], srcJs[1], srcJs[2]])
    .pipe(concat('allPolify.js'))
    .pipe(gulp.dest(distJs))
  gulp.src(srcJs[0]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
  gulp.src(srcJs[1]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
  gulp.src(srcJs[2]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
  gulp.src(srcJs[3]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
  gulp.src(srcJs[4]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
  return gulp
    .src('static/scripts/js/allPolify.js')
    .pipe(uglifyJs())
    .pipe(gulp.dest(distJs))
})
