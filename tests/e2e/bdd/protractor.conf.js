


exports.config = {
  allScriptsTimeout: 11000,
  
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8080/app/',
  
  // set to "custom" instead of cucumber.
  framework: 'custom',
  
  // path relative to the current config file
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  
  
  // require feature files
  specs: [
    'features/execute_javascript.feature' // accepts a glob,
  ],
  
  cucumberOpts: {
    // require step definitions
    require: [
      'features/step_definitions/execute_javascript_steps.js' // accepts a glob
    ]
  }
};
