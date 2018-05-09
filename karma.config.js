module.exports = function (config) {
    config.set({
        basePath: "",
        plugins: [
            "karma-browserify",
            "karma-babel-preprocessor",
            "karma-mocha",
            "karma-chrome-launcher"
        ],
        frameworks: ["browserify", "mocha"],
        browserify: {
            debug: true,
            transform: [["babelify"]]
        },
        files: ["src/**/*.js"],
        exclude: [],
        preprocessors: {"src/**/*.js": ["browserify"]},
        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ["ChromeHeadless"],
        singleRun: false,
        concurrency: Infinity
    });
};
