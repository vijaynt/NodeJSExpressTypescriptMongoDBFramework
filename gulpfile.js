var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

var paths = {
  views: ["src/views/**/*.*"],
  swagger: ["src/swagger-docs/*.yaml"],
  assets: ["src/public/**/*.*"]
};

gulp.task("copy-views", function () {
  return gulp
  .src(paths.views)
  .pipe(gulp.dest("dist/views"));
});

gulp.task("copy-swagger", function () {
  return gulp
  .src(paths.swagger)
  .pipe(gulp.dest("dist/swagger-docs"));
});

gulp.task("copy-assets", function () {
  return gulp
  .src(paths.assets)
  .pipe(gulp.dest("dist/public"));
});

gulp.task("transpile", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});

gulp.task(
  "default",
  gulp.series(
	  gulp.parallel("copy-views"), 
	  gulp.parallel("copy-swagger"), 
	  gulp.parallel("copy-assets"), 
	  gulp.parallel("transpile")
  )
);