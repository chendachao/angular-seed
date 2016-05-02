'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'versionDao', function($scope, versionDao) {
  versionDao.getAuthors().then(function (data) {
    debugger
    $scope.author = data;
  });
}]);