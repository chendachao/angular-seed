__adapter__.addStepDefinitions(function (scenario) {
    scenario.Given(/^there is a test step$/, function () {
debugger
    });
    scenario.When(/^it is executed$/, function () {
    });
    scenario.When(/^it is not executed$/, function (callback) {
        callback(null, 'pending');
    });
    scenario.Then(/^test succeeds$/, function () {
    });
    scenario.Then(/^test fails$/, function (callback) {
        callback(new Error('Step failed'));
    });
});