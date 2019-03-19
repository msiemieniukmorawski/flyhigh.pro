var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var browserSync = require("browser-sync").create();
var inject = require("gulp-inject");
var webp = require("gulp-webp");
let uglify = require("gulp-uglify");

// gulp.task('html', function() {
//     return gulp.src('src/*.html')
//         .pipe(gulp.dest('build/'))
// });

gulp.task("images", function() {
  return gulp.src("src/images/*").pipe(gulp.dest("build/images"));
});
gulp.task("webp", function() {
  return gulp
    .src("src/images/*")
    .pipe(webp())
    .pipe(gulp.dest("build/images"));
});

gulp.task("html-watch", function() {
  gulp.watch("src/index.html", ["html"]);
});

gulp.task("sass", function() {
  return gulp
    .src("src/scss/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("build/css"));
});

gulp.task("sass-watch", function() {
  gulp.watch("src/scss/**/*.scss", ["sass"]);
});

gulp.task("es6", function() {
  return gulp
    .src("src/js/*.js")
    .pipe(
      babel({
        presets: ["env"]
      })
    )
    .on("error", function(e) {
      console.error(e);
      this.emit("end");
    })
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
});

gulp.task("es6-watch", function() {
  gulp.watch("src/js/**/*.js", ["es6"]);
});
gulp.task("html", function() {
  var target = gulp.src("src/*.html");
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(["es6", "sass"], { read: false });

  return target.pipe(inject(sources)).pipe(gulp.dest("build/"));
});

gulp.task("serve", function() {
  browserSync.init({
    server: "./build/"
  });

  gulp.start("sass");
  gulp.start("es6");
  gulp.start("html");
  gulp.start("images");
  gulp.start("webp");

  gulp.start("sass-watch");
  gulp.start("es6-watch");
  gulp.start("html-watch");

  gulp.watch("build/**/*.html").on("change", browserSync.reload);
  gulp.watch("build/**/*.css").on("change", browserSync.reload);
  gulp.watch("build/**/*.js").on("change", browserSync.reload);
});

gulp.task("default", ["serve"]);
