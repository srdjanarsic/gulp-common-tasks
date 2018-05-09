/**
 * Gulp configuration
 */
const {argv} = require("yargs");

const isProd = (process.env.NODE_ENV || argv.env) === "production";
const isDev = !isProd;

const mode = isProd ? "production" : "development";
console.log("Running in '" + mode + "' mode!");

const sourceDir = "./src/app/";
const buildDir = "./build/";

const config = {

    /**
     * Environment
     */
    isProd: isProd,
    isDev: isDev,

    /**
     * Files paths/patterns
     */
    sourceDir: sourceDir,
    buildDir: buildDir,
    devDir: "./dev/",
    indexHtml: sourceDir + "index.html",
    // js
    allJsFilesGlob: [sourceDir + "**/*.js"],
    jsAppFilesGlob: [
        sourceDir + "**/*.js",
        "!" + sourceDir + "**/*.unit.test.js"
    ],
    jsBuild: "build.min.js",
    jsBuildDir: buildDir + "/js/",
    // css
    sassFilesGlob: [sourceDir + "**/*.scss"],
    cssBuild: "style.min.css",
    cssBuildDir: buildDir + "/css/",
    // assets
    assetsSourceGlob: sourceDir + "/assets/**/*",
    assetsDestDir: buildDir + "/assets/",

    /**
     * Local (dev) server
     */
    localPort: 3232,

    /**
     * Linting
     */
    lintFilesGlob: [sourceDir + "**/*.js"],

    /**
     * Unit test - Mocha (w/o browser api)
     */
    unitTestMochaGlob: [sourceDir + "js/**/*.unit.test.js"],

    /**
     * Unit test - Karma (with browser api)
     */
    unitTestKarmaGlob: [sourceDir + "**/*.unit.test.js"]
};

module.exports = config;
