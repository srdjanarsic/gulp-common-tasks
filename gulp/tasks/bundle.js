/**
 * Concat and uglify javasscript files
 */
const uglify = require("gulp-uglify-es").default;
const browserify = require("browserify");
const buffer = require("vinyl-buffer");
const babelify = require("babelify");
const source = require("vinyl-source-stream");

module.exports = function (gulp, $, config) {
    gulp.task("bundle", function () {
        return browserify({
            entries: "src/app/main.js",
            debug: true
        })
            .transform(babelify, {presets: ["env"]})
            .bundle()
            .pipe(source("app.js"))
            .pipe(buffer())
            .pipe($.if(config.isDev, $.sourcemaps.init()))
            .pipe($.babel({presets: ["env"]}))
            .pipe($.concat(config.jsBuild))
            .pipe($.rename(config.jsBuild))
            .pipe(uglify())
            .pipe($.if(config.isDev, $.sourcemaps.write(".")))
            .pipe(gulp.dest(config.jsBuildDir))
            .pipe($.if(config.isDev, $.connect.reload()));
    });
};
