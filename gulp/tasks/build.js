/**
 * Build tasks pipeline
 */
let runSequence = require("run-sequence");

// eslint-disable-next-line no-unused-vars
module.exports = function (gulp, $, config) {
    runSequence = runSequence.use(gulp);

    // register `build` task (build pipeline)
    gulp.task("build", ["clean"], function (cb) {
        runSequence("eslint", "bundle", ["sass", "assets"], "html", cb);
    });
};
