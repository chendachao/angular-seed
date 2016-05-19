module.exports = function(config){
  var report = 'report/',
      coverageDir = 'coverage/';
  config.set({

    basePath : '',

    frameworks: ['cucumber-js'],
    
    files : [
     // libraries
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/jasmine-jquery/lib/jasmine-jquery.js',
      
      // app
      'app/components/**/*.js',
      'app/view*/**/*.js',

      // features
      {
        pattern: 'test/cucumber-js/features/*.features', included: false
      },
      // step definitions
      'test/cucumber-js/features/step_definitions/*.js',

    ],

    client: { // Specify this if you want to test features/scenarios with certain tags only
      args: ['--tags', '@frontend']
    },

    preprocessors: {
    },
    
    autoWatch : true,

    // browsers : ['Chrome', 'Firefox', 'IE', 'PhantomJS'],
    browsers : ['Chrome'],
    
    // plugins: [
    //     'karma-cucumber-js'
    // ],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    reporters: ['progress', 'junit', 'bdd-json'],

    bddJSONReporter: {
      outputFile: 'report/results.json' // 'results.json' will be filled with all scenarios test results
    },

    junitReporter : {
      outputDir: 'report', // results will be saved as $outputDir/$browserName.xml
      outputFile: 'report/' + 'junit-reporter/unit.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
      suite: 'unit', // suite will become the package name attribute in xml testsuite element
      useBrowserName: true, // add browser name to report and classes names
      nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
      classNameFormatter: undefined // function (browser, result) to customize the classname attribute in xml testcase element
    }

  });
};
