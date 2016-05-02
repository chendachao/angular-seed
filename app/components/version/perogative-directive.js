// Code goes here
angular.module('myApp.version.perogative-directive', [])

.directive('myPerogative', [ function() {

    return {
        restrict : 'EA',
        // template: '<button class="btn btn-primary" ng-model="perogative"  ng-click="updateButton()" ng-dblclick="dblClickUpdate()">{{perogative}}</button>',
        templateUrl : 'tpl/perogative.html',
        scope : true,
        controller: function ($scope) {
            console.log('in controller');
        },
        link : function(scope, element, attrs) {
            
            scope.perogative = 'Click Me';

            scope.updateButton = function() {
                scope.perogative = 'My Other Perogative';
            };

            scope.dblClickUpdate = function() {
                scope.perogative = 'My Other Other Perogative';
            };

        }
    }
} ])
