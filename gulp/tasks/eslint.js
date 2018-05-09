/**
 * ESLint task pipeline
 */

module.exports = function (gulp, $, config) {
    // register `eslint` task
    gulp.task("eslint", function () {
        return gulp
            .src(config.lintFilesGlob)
            .pipe($.eslint())
            .pipe($.eslint.format())
            .pipe($.if(
                config.isProd,
                $.eslint.failAfterError()
            ));
    });
};
