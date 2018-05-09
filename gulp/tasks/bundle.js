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
            .transform(babelify, {
                presets: ["env"],
                sourceMaps: true
            })
            .bundle()
            // converts readable stream 2 vinyl files stream
            .pipe(source("app.js"))
            // convert vinyl `content` from stream to buffer
            .pipe(buffer())
            .pipe($.if(config.isDev, $.sourcemaps.init()))
            .pipe(uglify())
            .pipe($.if(config.isDev, $.sourcemaps.write(".")))
            .pipe(gulp.dest(config.jsBuildDir))
            .pipe($.connect.reload());
    });
};
