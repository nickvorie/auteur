const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");

gulp.task("html", () => gulp
	.src(["./src/**/*.html"])
	.pipe(htmlmin({ collapseWhitespace: true }))
	.pipe(gulp.dest("dist")));
