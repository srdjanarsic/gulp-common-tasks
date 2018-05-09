/**
 * Unit testing by using mocha
 */

module.exports = function (gulp, $, config) {
    // register 'unit-test' task
    gulp.task("ut-mocha", function () {
        return gulp.src(config.unitTestMochaGlob, {read: false})
            .pipe($.mocha({
                require: ["babel-core/register"],
                reporter: "spec"
            }));
    });
};
