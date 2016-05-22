// Karma configuration
// Generated on Sun May 22 2016 13:21:27 GMT+0800 (China Standard Time)

module.exports = function(config) {

  var report = 'report/',
      coverageDir = 'coverage/';

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['cucumber-js'],

    // list of files / patterns to load in the browser
    files: [
        // Feature files to test
      {pattern: 'tests/unit/bdd/features/*.feature', include: false},

      // Include JS files with step definitions and any other files they require
      'tests/unit/bdd/frontend_specs/**/*.steps.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    client: { // Specify this if you want to test features/scenarios with certain tags only
      args: ['--tags', '@frontend']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'bdd-json'],  // Specify this reporter if you need to integrate test results into living documentation

    bddJSONReporter: {
      outputFile: 'report/bdd/results.json'   // 'results.json' will be filled with all scenarios test results
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
};
