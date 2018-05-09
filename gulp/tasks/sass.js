/**
 * Compile SASS files
 */

module.exports = function (gulp, $, config) {
    // configure gulp-sass
    const sassConfig = {outputStyle: "compressed"};

    // register `sass` task
    gulp.task("sass", function () {
        return gulp.src(config.sassFilesGlob)
            .pipe($.if(config.isDev, $.sourcemaps.init()))
            .pipe($.sass(sassConfig).on("error", $.sass.logError))
            .pipe($.autoprefixer())
            .pipe($.concat(config.cssBuild))
            .pipe($.if(config.isDev, $.sourcemaps.write()))
            .pipe(gulp.dest(config.cssBuildDir))
            .pipe($.if(config.isDev, $.connect.reload()));
    });
};
