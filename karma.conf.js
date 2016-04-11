module.exports = function(config){
  var report = 'report/',
      coverageDir = 'coverage/';
  config.set({

    basePath : '',
    
    files : [
     // libraries
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/jasmine-jquery/lib/jasmine-jquery.js',
      
      // app
      'app/components/**/*.js',
      'app/view*/**/*.js',
      
      // test
      'test/unit/components/**/*.spec.js',
      'test/unit/view*/**/*.spec.js',
      
      // html templates
      'app/tpl/**/*.html',
      
      // mocked json api
      'app/api/**/*.json'
    ],
    
    preprocessors: {
    	'app/!(bower_components)/**/*.js': ['jshint', 'coverage'],
    	'app/tpl/*.html': ['ng-html2js'],
    	'app/api/*.json': ['ng-json2js']
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
    
    ngJson2JsPreprocessor: {
    	stripPrefix: 'app/api/',
    	prependPrefix: 'served/'
    	 /* or define a custom transform function
         */
//    	cacheIdFromPath: function(filepath) {
//    		return cacheId;
//    	}
    },
    
    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox', 'IE'],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // plugins : [
    //         'karma-chrome-launcher',
    //         'karma-firefox-launcher',
    //         'karma-jasmine',
    //         'karma-junit-reporter',
    //         'karma-coverage',
    //         'karma-ng-html2js-preprocessor',
	 //        'karma-ng-json2js-preprocessor'
    //         ],
    reporters: ['progress', 'junit', 'coverage'],
    // coverageReporter: {
    //   type: 'html',
    //   dir: coverageDir + 'html',
    //   subdir: function (browser) {
    //    
    //     return browser;
    //   }
    // },
    coverageReporter: {
      dir: report + coverageDir,
      reporters: [
        { type: 'clover', subdir: 'report-clover'},   // add the prefix report- just don't let you mislead
        { type: 'cobertura', subdir: 'report-cobertura'}, // xml format supported by Jenkins
        { type: 'html', subdir: function (browser) {
          return 'report-html/'+ browser; 
        }},
        // { type: 'in-memory', subdir: 'report-in-memory'},
        { type: 'json', subdir: 'report-json'},
        { type: 'json-summary', subdir: 'report-json-summary'},
        { type: 'lcov', subdir: 'report-lcov'}, // (lcov and html) list coverage
        // { type: 'lcovonly', subdir: 'report-lcovonly'},
        // { type: 'none', subdir: 'report-none'},
        { type: 'teamcity', subdir: 'report-teamcity'}, // see output
        { type: 'text', subdir: 'report-text', file: 'text.txt'}, // text table with details
        { type: 'text-lcov', subdir: 'report-text-lcov'},
        { type: 'text-summary', subdir: 'report-text-summary', file: 'text-summary.txt'}  // just a text summary
        ]
    },
    junitReporter : {
      outputDir: report, // results will be saved as $outputDir/$browserName.xml
      outputFile: report + 'junit-reporter/unit.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: 'unit', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined // function (browser, result) to customize the classname attribute in xml testcase element
    }

  });
};
