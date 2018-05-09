/**
 * Unit test watch
 */
let runSequence = require("run-sequence");

// eslint-disable-next-line no-unused-vars
module.exports = function (gulp, $, config) {
    runSequence = runSequence.use(gulp);

    // register `unit-test-watch` task
    gulp.task("ut-mocha-watch", ["ut-mocha"], function () {
        gulp.watch(config.allJsFilesGlob, ["ut-mocha"]);
    });
};
