// var GoogleLand = require('./google_land').Land;
//
// var CucumberJsExampleWorld = function() {
//     this.google = new GoogleLand();
// };
// exports.World = CucumberJsExampleWorld;

var zombie = require('zombie');

function World() {
    this.browser = new zombie();

    this.visit = function (url, callback) {
        this.browser.visit(url, callback);
    };
}

module.exports = function () {
    this.World = World;
};


