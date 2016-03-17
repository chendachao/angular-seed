'use strict';

angular.module('myApp.version', [
  'myApp.version.interpolate-filter',
  'myApp.version.version-directive',
  'myApp.version.perogative-directive',
  'myApp.version.tabs-directive'
])

.value('version', '0.1');
