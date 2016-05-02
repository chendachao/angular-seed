'use strict';

describe('myApp.version module', function() {
  beforeEach(module('myApp.version'));

  describe('interpolate filter', function() {
    beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
    }));

    it('should replace VERSION', inject(function(interpolateFilter, version) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before '+version+' after');
    }));
    it('should format user', inject(function($filter) {
      var user = {name: 'Larry'};
      var formatUser = $filter('json')(user, 2);
      expect(formatUser).toContain('Larry');
    }));
    it('should have a working /home route', inject(function($location, $rootScope) {
      $location.path('/home');
      $rootScope.$digest();

      expect($location.path()).toBe('/home');
    }));
  });
});
