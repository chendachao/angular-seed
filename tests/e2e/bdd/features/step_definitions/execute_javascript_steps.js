// 'use strict';
// require(process.cwd() + '/../../../../app/bower_components/angular/angular.js');
// var app = require(process.cwd() + '/../../../../app/app.js');

var assert = require('assert');


function executeJSSteps() {
    var Given = When = Then = this.defineStep;

    this.Given(/^we have some test data$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        console.log('In given');
        debugger;
        callback();
    });
    this.When(/^my javascript is executed$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        // this.page.execute_script("alert('yo');");
        console.log('In when');
        callback();
    });
    this.Then(/^should be show some data$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        console.log('In when');
        assert.equal(1,1);
        callback();
    });
}

module.exports = executeJSSteps;


