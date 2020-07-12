const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')
const terser = require('gulp-terser')
const imagemin = require('gulp-imagemin')

// 压缩html
gulp.task('minify-html', async () => {
  return gulp.src(['./public/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./public'))
})

// 压缩css
gulp.task('minify-css', async () => {
  return gulp.src(['./public/css/**/*.css'])
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/css'))
})

// 压缩js
gulp.task('minify-js', async () => {
  return gulp.src(['./public/js/**/*.js'])
    .pipe(terser())
    .pipe(gulp.dest('./public/js'))
})

// 压缩图片
gulp.task('minify-images', async () => {
  return gulp.src(['./public/**/*.png', './public/**/*.jpg', './public/**/*.gif', './public/**/*.svg'])
    .pipe(imagemin([imagemin.gifsicle(), imagemin.jpegtran(), imagemin.optipng(), imagemin.svgo()], { verbose: true }))
    .pipe(gulp.dest('./public'))
})

// 默认任务
gulp.task('default', gulp.parallel(
  'minify-html',
  'minify-css',
  'minify-js',
  'minify-images'
))
