/**
 * Dynamically load plugins and tasks by using
 * gulp-load-plugins and gulp-autoload-tasks
 * from tasks directory
 */

const gulp = require("gulp");
const plugins = require("gulp-load-plugins")(gulp);
const autoload = require("gulp-autoload-tasks");

const config = require("./config");

autoload(gulp, plugins, config, "gulp/tasks");
