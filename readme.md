# Gupl - common tasks

This is a example of using Gulp to automate ES6 based projects.

## Installation

* Clone this repo
* Inside gulp-common-tasks run `npm install`

## Principles

This project is based on following principles

* Each gulp task is its own file inside `gulp/task` directory.
* Build goes to `build` directory.
* ESLint config starts from `extends:all` preset.\
  Some boring rules are disabled. Explore `.eslintrc` to get more info.

## Commands

For development

* `npm start` - makes build and starts watchers (gulp `dev` task)
* `npm run build:prod` - makes build - production (gulp `build` task)
* `npm test` - makes build - production (gulp `ui-karma` task)

For production

* `npm run build:dev` - makes build - development (gulp `dev` task)

## Files organization

Directory `src/app` contains app code and unit tests files.\
These files are just for demo purpose.\
You have to use these or to put your files in place in order to execute gulp tasks.

```js
- gulpfile.js
+ gupl
  - index.js       // auto loading plugins & tasks
  - config.js      // configuration of everything
  + tasks
    - assets.js    // copy assets (src > build)
    - build.js     // create build (both dev/prod)
    - bundle.js    // transpile and bundle js files
    - clean.js     // delete build directory
    - dev.js       // run build, serve, watchers...
    - eslint.js    // linter
    - html.js      // inject js/css refs into html
    - sass.js      // sass to css compailing
    - serve.js     // local (dev) server with livereload
    - ut-karma.js  // run unit test via karma (in browser)
    - ut-mocha.js  // run unit test via mocha (w/o browser api)
+ src
  + app
    - index.html                   // html template
    - main.js                      // app bootstrap
    - main.unit.test.js            // app bootstrap unit test
    + js
      - computer.js                // example files
      - computer.unit.test.js      // example unit test files
      - computer-type.js           // example files
      - computer-type.unit.test.js // example unit test files
```

## Used tools & libraries

* Browserify
* Babel
* Karma
* Mocha
* Chai
