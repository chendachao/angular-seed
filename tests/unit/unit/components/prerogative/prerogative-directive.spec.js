describe('app.prerogative.prerogative-directive', function () {

    describe('prerogative directive', function () {
        var $compile,
            $rootScope,
            $scope,
            $httpBackend,
            $q,
            $templateCache,
            deferred;
        
        var elm, 
            scope, 
            controller;

        var api = {},
            reqHandler = {};

        function compileElement() {
            elm = angular.element(elm);
            $compile(elm)($scope);
            $scope.$digest();
        }

        beforeEach(function () {
            module('app.prerogative.prerogative-directive');
            module('karma.templates');
        });

        beforeEach(function () {
            inject(function (_$rootScope_, _$compile_, _$httpBackend_, _$q_, _$templateCache_) {
                $compile = _$compile_;
                $rootScope = _$rootScope_;
                $scope = $rootScope.$new();
                $httpBackend = _$httpBackend_;
                $q = _$q_;
                $templateCache = _$templateCache_;
                deferred = $q.defer();
            });
        });

        // karma-ng-html2js-preprocessor handle json
        beforeEach(function () {

            // karma-ng-html2js-preprocessor handle json
            var resourceMap = angular.fromJson($templateCache.get('tests/unit/unit/helpers/map/map.json'));

            for (var resourceIndex in resourceMap) {
                var resource = resourceMap[resourceIndex];
                for (var resourceName in resource.data) {
                    var fullPath = resource.basePath + resourceName + resource.suffix;  // relative full path, same as url
                    api[fullPath] = api[resource.prefix + resourceName] = angular.fromJson($templateCache.get(fullPath));

                    reqHandler[resource.prefix + resourceName] = $httpBackend.when('GET', fullPath).respond(function (method, url, data, headers) {
                        return [200, api[url]]; // here the url is same with fullPath
                    });
                }
            }
        });

        // jasmine-jquery handle json
        beforeEach(function () {
            // jasmine-jquery handle json
            jasmine.getJSONFixtures().fixturesPath = 'base/app/api/jasmine-jquery';

            var jasmineJQueryHandledData = loadJSONFixtures('handle.json');
        });

        // karma-read-json
        beforeEach(function () {
            debugger
           var karmaReadJSON = readJSON('app/api/jasmine-jquery/handle.json');
        });

        beforeEach(function () {

            elm = $templateCache.get('tests/unit/unit/helpers/html/prerogative.html');

            compileElement();

            // get direcitve's controller by input directive's name
            controller = elm.controller('myPrerogative');
            scope = elm.scope() || elm.isolateScope();
        });

        describe('when page compiles the perogative directive', function () {

            it('display directive button on page with interpolated value for button label', function () {
                expect(elm.html()).toContain('Click Me');
            });

            it('should give another value for prerogative scope variable', function(){
                //Change scope variable to Something completely different
                scope.prerogative = 'Sweet Chili Sauce';

                //call the updateButton function on isolate scope
                scope.updateButton();

                //test to make sure value changed which tests the updateButton Function
                expect(scope.prerogative).toBe('My Other Perogative');
            });

            it('should give another value for prerogative scope variable when double clicked', function(){

                // console.log(angular.mock.dump(elm));

                //call the dblClickUpdate function in scope
                scope.dblClickUpdate();

                //test to make sure value changed which tests the updateButton Function
                expect(scope.prerogative).toBe('My Other Other Perogative');
            });

        });
    });

});
