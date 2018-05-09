/**
 * Execute tests using karma test runner
 */
const {Server} = require("karma");
const path = require("path");

// eslint-disable-next-line no-unused-vars
module.exports = function (gulp, $, config) {
    // register `karma-test` task
    gulp.task("ut-karma", function (done) {
        const server = new Server({
            configFile: path.join(__dirname, "../../karma.config.js"),
            singleRun: config.isProd
        });

        // only production code requires exit (done() cb)
        if (config.isProd) {
            server.on("run_complete", (browsers, results) => {
                done(results.exitCode === 0 ? null : "Karma test error!");
            });
        }

        server.start();
    });
};
