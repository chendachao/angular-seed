var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var jasmine2HtmlReporter =  new Jasmine2HtmlReporter({
  savePath: 'report/e2e/protractor-jasmine2-html-reporter/',
  filePrefix: 'index',
  screenshotsFolder: 'screenshots'
});

var htmlScreenshotReporter = new HtmlScreenshotReporter({
  dest: 'report/e2e/protractor-jasmine2-screenshot-reporter/',
  filename: 'index.html'
});

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.e2e.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8080/app/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true
  },
  
  // Setup the report before any tests start
  beforeLaunch: function() {
    return new Promise(function(resolve){
      htmlScreenshotReporter.beforeLaunch(resolve);
    });
  },
  
  // Assign the test reporter to each running instance
  onPrepare: function () {
    jasmine.getEnv().addReporter(jasmine2HtmlReporter);
    jasmine.getEnv().addReporter(htmlScreenshotReporter);
  },
  
  // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      htmlScreenshotReporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
  
};
