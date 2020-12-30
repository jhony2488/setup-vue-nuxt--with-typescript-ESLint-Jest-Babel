const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
// minifyCss = require('gulp-clean-css'),
const svgmin = require('gulp-svgmin')
const uglifyJs = require('gulp-uglify')
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
    'static/scripts/html5Shiv.js',
    'static/scripts/respond.js',
    'static/scripts/jquery.js',
    'static/scripts/acessibilidade.js',
  ]
  const distJs = ['static/scripts/']
  gulp.src(srcJs[0]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
  gulp.src(srcJs[1]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
  gulp.src(srcJs[2]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
  return gulp.src(srcJs[3]).pipe(uglifyJs()).pipe(gulp.dest(distJs))
})
