'use strict';

const gulp = require ('gulp');
const pug = require ('gulp-pug');
const beautify = require('gulp-beautify');
const terser = require ('gulp-terser');
const rename = require ('gulp-rename');
const concat = require ('gulp-concat');
const sass = require ('gulp-sass');
const autoprefixer = require ('gulp-autoprefixer');
const cleanCSS = require ('gulp-clean-css');
const imagemin = require ('gulp-imagemin');
const pngQuant = require('imagemin-pngquant');
const mozJpeg = require('imagemin-mozjpeg');
const webp = require('gulp-webp');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const clean = require('gulp-clean');
const watch = require ('gulp-watch');
const browserSync = require ('browser-sync').create();

gulp.task('pages', function () {
  return gulp.src('src/pages/*.pug')
    .pipe(pug())
    .pipe(beautify.html({
      indent_size: 2
    }))
    .pipe(gulp.dest('build'))
    .on('end', browserSync.reload);
});

gulp.task('styles', function() {
  return gulp.src('src/styles/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
     }))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('scripts', function () {
  return gulp.src('src/scripts/**/*.js')
    .pipe(concat ('all.js'))
    .pipe(terser())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest ('build/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('images', function () {
  return gulp.src('src/images/**/*.*', {ignore: 'src/images/sprites/**/*.*'})
    .pipe(imagemin({
      svgoPlugins: [{
		removeViewBox: true
      }],
      verbose: true
    },[
      pngQuant({
        quality: 60, speed: 5
      }),
      mozJpeg({
        quality: 60,
        progressive: true,
        tune: "ms-ssim",
        smooth: 2
      })
    ]))
    .pipe(gulp.dest('build/img'))
});

gulp.task('webp', function () {
  return gulp.src('build/img/**/*.{jpg,png}', {ignore: 'build/img/favicon/**/*.*'})
    .pipe(webp())
    .pipe(gulp.dest('build/img'))
});

gulp.task('sprite:svg', function () {
  return gulp.src('src/images/sprites/*.svg')
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
  }))
  .pipe(svgSprite({
    mode: {
      symbol: {
        sprite: 'sprite.inline.svg',
        dest:'.'
      },
      view: {
        bust: false,
        sprite: 'sprite.styles.svg',
        dest:'.'
      }
    }
  }))
  .pipe(gulp.dest('build/img/'));
});

gulp.task('fonts', function () {
  return gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('build/fonts'))
});

gulp.task('media', function () {
  return gulp.src('src/media/**/*.*')
    .pipe(gulp.dest('build'))
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'build',
      index: 'index.html'
    }
  });
});

gulp.task('watch', function () {
  gulp.watch('src/pages/**/*.pug', gulp.series('pages'));
  gulp.watch('src/styles/**/*.scss', gulp.series('styles'));
  gulp.watch('src/scripts/**/*.js', gulp.series('scripts'));
  gulp.watch('src/fonts/*.*', gulp.series('fonts'));
  gulp.watch('src/media/*.*', gulp.series('media'));
});

//Очистка билда: всё
gulp.task('clean', function () {
  return gulp.src('build', {read: false})
    .pipe(clean());
});

//Очистка билда: шрифты
gulp.task('clean:fonts', function () {
  return gulp.src('build/fonts', {read: false})
    .pipe(clean());
});

//Очистка билда: html
gulp.task('clean:pages', function () {
  return gulp.src('build/*.html', {read: false})
    .pipe(clean());
});

//Очистка билда: css
gulp.task('clean:styles', function () {
  return gulp.src('build/css', {read: false})
    .pipe(clean());
});

//Очистка билда: изображения
gulp.task('clean:images', function () {
  return gulp.src('build/img', {read: false})
    .pipe(clean());
});

//Сборка билда: всё
gulp.task('build', gulp.series (
  'clean',
  gulp.parallel('pages', 'styles', 'scripts', 'fonts', 'media', 'images'),
  gulp.parallel('webp', 'sprite:svg')
));

//Сборка билда: html
gulp.task('build:pages', gulp.series ('clean:pages', 'pages'));

//Сборка билда: css
gulp.task('build:styles', gulp.series ('clean:styles', 'styles'));

//Сборка билда: изображения
gulp.task('build:images', gulp.series ('clean:images', 'images', 'webp', 'sprite:svg'));

//Разработка: 'gulp start'
gulp.task('default', gulp.series (
  gulp.parallel('serve', 'watch')
));
