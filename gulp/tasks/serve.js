/**
 * Server app locally (build directory)
 */

module.exports = function (gulp, $, config) {
    // configure gulp-connect
    const connectConfig = {
        root: config.buildDir,
        port: config.localPort,
        livereload: true
    };

    // register `serve` task
    gulp.task("serve", function () {
        $.connect.server(connectConfig);
    });
};
