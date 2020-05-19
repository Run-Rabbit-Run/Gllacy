var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var server = require("browser-sync").create();

gulp.task("style", function (done) {
  gulp.src("source/scss/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))    
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style-min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
    done();
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 80}))
    .pipe(gulp.dest("source/img"));
});

gulp.task("sprite", function () {
  return gulp.src("source/img/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

// gulp.task("serve", function () {
//   server.init({
//     server: "build/"
//   });

//   gulp.watch("source/scss/**/*.{scss,sass}", ["style"]);
//   gulp.watch("source/*.html", ["html"])
//     .on("change", server.reload);
// });

gulp.task('watch', function() {  // слежение за HTML и CSS и обновление браузера
  gulp.watch(['./build/*.html', './build/css/**/*.css'], gulp.parallel(server.reload));
  gulp.watch('./source/scss/**/*.scss', gulp.parallel('style'))
  .on("change", server.reload); // слежение за SCSS и компиляция в CSS
  gulp.watch('./source/*.html', gulp.parallel('html'))
  .on("change", server.reload);
  
  // watch('./source/scss/**/*.scss', function () {   // добавляем задержку в компиляцию в 1 секунду, чтобы избежать ошибок
  //   setTimeout(gulp.parallel('scss'), 1000)
  // });
  
});

gulp.task('server', function() {  // Задача запуска сервера из папаки source
  server.init({
    server: {
      baseDir: './build/'
    }
  });
});

gulp.task('build', gulp.series(gulp.parallel("clean", "webp", "images"), "copy", "style", "sprite", "html", gulp.parallel("server", "watch")));