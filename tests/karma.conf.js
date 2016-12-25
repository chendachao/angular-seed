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
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // libraries
      'node_modules/jquery/dist/jquery.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/jasmine-jquery/lib/jasmine-jquery.js',

      // if karma-ng-html2js-preprocessor need more time to convert json to js then this is a better choice
      'node_modules/karma-read-json/karma-read-json.js',

      // app
      'app/app.js',
      'app/js/**/*.js',

      // css
      'app/css/**/*.css',

      // images
      {
        pattern: 'app/images/*.jpg',
        // TODO: remove
        watched: false,
        included: false,
        served: true,
        nocache: false
      },

      // html templates
      'app/html/**/*.html',

      // mocked api
      'app/api/!(jasmine-jquery)/*.json',

      // handled with jasmine-jquery
      {
        pattern: 'app/api/jasmine-jquery/*.json',
        included: false
      },

      // tests
      'tests/unit/unit/components/**/*.spec.js',

      // directive trigger
      'tests/unit/unit/helpers/html/**/*.html',
        
      // map table for mocked api data
      'tests/unit/unit/helpers/map/map.json'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.js': ['jshint'],
      'app/html/**/*.html': ['ng-html2js'],   // html templates
      'tests/unit/unit/helpers/html/**/*.html': ['ng-html2js'], // directive trigger
      'tests/unit/unit/helpers/map/map.json': ['ng-html2js'],
      'app/api/!(jasmine-jquery)/*.json': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'app/',
//      stripSuffix: '.ext',
      // prepend this to the
//      prependPrefix: '',

//      // or define a custom transform function
//      // - cacheId returned is used to load template
//      //   module(cacheId) will return template at filepath
//      cacheIdFromPath: function(filepath) {
//        // example strips 'public/' from anywhere in the path
//        // module(app/templates/template.html) => app/public/templates/template.html
//        var cacheId = filepath.strip('public/', '');
//        return cacheId;
//      },

      // - setting this option will create only a single module that contains templates
      //   from all the files, so you can load them all with module('foo')
      // - you may provide a function(htmlPath, originalPath) instead of a string
      //   if you'd like to generate modules dynamically
      //   htmlPath is a originalPath stripped and/or prepended
      //   with all provided suffixes and prefixes
      moduleName: 'karma.templates'
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'kjhtml', 'html'],

    htmlReporter: {
      outputFile: 'report/html/units.html',

      // Optional 
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description'
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
