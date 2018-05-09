/**
 * Inject js/css into html
 */

module.exports = function (gulp, $, config) {
    // register `html` task
    gulp.task("html", function () {
        const target = gulp.src(config.indexHtml);
        const sources = gulp.src(
            [
                config.jsBuildDir + config.jsBuild,
                config.cssBuildDir + config.cssBuild
            ],
            {read: false}
        );

        return target
            .pipe($.inject(sources, {ignorePath: "build"}))
            .pipe(gulp.dest("./build"))
            .pipe($.connect.reload());
    });
};
