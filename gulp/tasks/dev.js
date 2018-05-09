/**
 * Build watch
 */
let runSequence = require("run-sequence");

// eslint-disable-next-line no-unused-vars
module.exports = function (gulp, $, config) {
    runSequence = runSequence.use(gulp);

    // register `dev` task
    gulp.task("dev", ["build", "serve"], function () {
        gulp.watch(config.jsAppFilesGlob, ["bundle"]);
        gulp.watch(config.assetsSourceGlob, ["assets"]);
        gulp.watch(config.sassFilesGlob, ["sass"]);
    });
};
