
module.exports = function(config) {

  var basePath = '../',
      report = 'report/',
      coverageDir = 'coverage/';

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: basePath,


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [

      // tests
      'tests/unit/mocha/*.spec.js',

    ],
    
    plugins: [
        'karma-mocha',
        'karma-sinon',
        'karma-chai',
        'karma-chrome-launcher',
        'karma-junit-reporter',
        'karma-mocha-reporter'
    ],


    // list of files to exclude
    exclude: [
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'mocha'],

    // reporter options
    mochaReporter: {
      showDiff: true,
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      }
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
