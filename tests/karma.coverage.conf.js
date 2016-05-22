module.exports = function(config){
  var report = 'report/',
      coverageDir = 'coverage/';
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
    
    files : [
      // libraries
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/jasmine-jquery/lib/jasmine-jquery.js',

      // if karma-ng-html2js-preprocessor need more time to convert json to js then this is a better choice
      'bower_components/karma-read-json/karma-read-json.js',

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
      'app/**/*.js': ['jshint', 'coverage'],
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

    reporters: ['progress', 'dots', 'growl', 'junit', 'coverage'],
    // coverageReporter: {
    //   type: 'html',
    //   dir: coverageDir + 'html',
    //   subdir: function (browser) {
    //    
    //     return browser;
    //   }
    // },
    coverageReporter: {
      instrumenterOptions: {
        istanbul: {
          // noCompact: true,
          // embedSource: true,
          // noAutoWrap: true,
          // debug: true,
          // walkDebug: true,
          // coverageVariable: '',
          // preserveComments: '',

        }
      },
      // check: {
      //   global: {
      //     statements: 50,
      //     branches: 50,
      //     function: 50,
      //     lines: 50,
      //     excludes: [
      //        'app/app.js'
      //     ]
      //   },
      //   each: {
      //     statements: 50,
      //     branches: 50,
      //     functions: 50,
      //     lines: 50,
      //     excludes: [
      //       'other/directory/**/*.js'
      //     ],
      //     overrides: {
      //       'baz/component/**/*.js': {
      //         statements: 98
      //       }
      //     }
      //   }
      // },
      dir: report + coverageDir,
      reporters: [
        // { type: 'clover', subdir: 'report-clover'},   // add the prefix report- just don't let you mislead
        // { type: 'cobertura', subdir: 'report-cobertura', file: 'cobertura.txt'}, // xml format supported by Jenkins
        {
          type: 'html',
          subdir: function (browser) {
            return 'report-html/'+ browser;
          },
          includeAllSources: true,
          // this will create the report html file sibling the js
          // sourceStore: require('istanbul').Store.create('fslookup')
        }
        // { type: 'in-memory', subdir: 'report-in-memory'},
        // { type: 'json', subdir: 'report-json'},
        // { type: 'json-summary', subdir: 'report-json-summary'},
        // { type: 'lcov', subdir: 'report-lcov'}, // (lcov and html) list coverage
        // // { type: 'lcovonly', subdir: 'report-lcovonly', file: 'report-lcovonly.txt'},
        // // { type: 'none', subdir: 'report-none'},
        // { type: 'teamcity', subdir: 'report-teamcity', file: 'teamcity.txt'}, // see output
        // { type: 'text', subdir: 'report-text', file: 'text.txt'}, // text table with details
        // { type: 'text-lcov', subdir: 'report-text-lcov'},
        // { type: 'text-summary', subdir: 'report-text-summary', file: 'text-summary.txt'}  // just a text summary
        ]
    },
    
    junitReporter : {
      outputDir: report, // results will be saved as $outputDir/$browserName.xml
      outputFile: report + 'junit-reporter/unit.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: 'unit', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined // function (browser, result) to customize the classname attribute in xml testcase element
    },
    
    growlReporter: {
      prefix: 'UNIT TEST-'
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

    // browsers : ['Chrome', 'Firefox', 'IE', 'PhantomJS'],
    browsers : ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity

  });
};
