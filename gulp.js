var gulp = require("gulp");
var sass = require("node-sass");
var watch = require("gulp-watch");

console.log("Rodou");
gulp.task("sass", function(){
    console.log("Rodou");
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./build/css/*.css"));
});

gulp.task("watch", function(){
    gulp.watch("scss/*.scss", ["sass"]);
});

// exports.build = watch;