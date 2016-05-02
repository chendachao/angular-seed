describe('myApp.version.perogative-directive', function () {


    describe('perogative directive', function () {
        var elm, scope, $compile, $httpBackend, $q, servedData;

        function compileElement() {
            elm = angular.element(elm);
            $compile(elm)(scope);
            scope.$digest();
        }

        beforeEach(module('myApp.version',
            'ngResource',
            // load html templates that html2js plugin have convert to angular module and don't need to inject any more
            'karma.templates',
            // load the json file that json2js plugin have convert to angular module and inject the constant
            'served/handle.json'));

          beforeEach(function () {
              inject(function (_$rootScope_, _$compile_, _$httpBackend_, _$q_, _$templateCache_, _servedHandle_, _versionDao_) {

                  $compile = _$compile_;
                  scope = _$rootScope_;
                  $httpBackend = _$httpBackend_;
                  $q = _$q_;

                  deferred = $q.defer();

                  // json2js
                  servedData = _servedHandle_;

                  // TODO: convert to js object and trying to get them at once
                  // html2js handle json
                  // var handleJson = _$templateCache_.get('fixtures/api/html2js/handle.json');   // this is json file not js object
                  // var fromJson = _$templateCache_.get('fixtures/api/html2js/from.json');
                  
                  var html2jsBasePath = 'fixtures/api/html2js/';
                  var files = ['handle', 'from', 'authors'];
                  var data = {};
                  for (var i in files) {
                      data[files[i]+'Json'] = angular.fromJson(_$templateCache_.get(html2jsBasePath + files[i] + '.json'));
                  }

                  // jasmine-jquery handle json
                  jasmine.getJSONFixtures().fixturesPath = 'base/app/fixtures/api/jasmine-jquery';

                  var handleData = loadJSONFixtures('handle.json');

                  // $httpBackend.when('GET', 'fixtures/api/html2js/authors.json').respond(200, data['authorsJson']);
                  $httpBackend.when('GET', 'fixtures/api/html2js/authors.json').respond(function () {
                      deferred.resolve(data['authorsJson']);
                      return [200, deferred.promise];
                  });
                  $httpBackend.when('GET', 'fixtures/api/html2js/authors.json').respond(500, deferred.promise);

                  // deferred.resolve(data['authorsJson']);

                  _versionDao_.getAuthors().then(function (data) {
                      console.log(data);
                  });

                  $httpBackend.flush();


                  elm = '<div my-perogative></div>';

                  compileElement();
              })
          });

          fit('Test mocked json api & json2js plugin', function () {
               expect(servedData).toEqual({
                 prop: 'val'
             });
          });

        describe('when page compiles the perogative directive', function () {

            xit('display directive button on page with interpolated value for button label', function () {
                expect(elm.html()).toContain('Click Me');
            });

            xit('should give another value for perogative scope variable', function(){
                //Change scope variable to Something completely different
                elm.scope().perogative = 'Sweet Chili Sauce';

                //call the updateButton function on isolate scope
                elm.scope().updateButton();

                //digest the $rootScope
                scope.$digest();

                //test to make sure value changed which tests the updateButton Function
                expect(elm.scope().perogative).toBe('My Other Perogative');
            });

            it('should give another value for perogative scope variable when double clicked', function(){
                //Change scope variable to Something completely different
                elm.scope().perogative = 'My Other Perogative';

                console.log(angular.mock.dump(elm));

                //call the dblClickUpdate function on isolate scope
                elm.scope().dblClickUpdate();

                //digest the $rootScope
                scope.$digest();

                //test to make sure value changed which tests the updateButton Function
                expect(elm.scope().perogative).toBe('My Other Other Perogative');
            });

        });
    });

});
