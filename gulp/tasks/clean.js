/**
 * Clean build task
 */

const del = require("del");

module.exports = function (gulp, $, config) {
    // register `clean` task
    gulp.task("clean", function () {
        return del(config.buildDir, {force: false});
    });
};
