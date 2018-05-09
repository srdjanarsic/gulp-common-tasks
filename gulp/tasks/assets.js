/**
 * Asset task
 */

module.exports = function (gulp, $, config) {
    // register `assets` task
    gulp.task("assets", function () {
        return gulp
            .src(config.assetsSourceGlob)
            .pipe($.changed(config.assetsDestDir))
            .pipe(gulp.dest(config.assetsDestDir));
    });
};
