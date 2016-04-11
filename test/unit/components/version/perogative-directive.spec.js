describe('myApp.version.perogative-directive', function () {


    describe('perogative directive', function () {
        var elm, scope, $compile, servedData;

        function compileElement() {
            elm = angular.element(elm);
            $compile(elm)(scope);
            scope.$digest();
        }

        beforeEach(module('myApp.version',
            // load html templates that html2js plugin have convert to angular module and don't need to inject any more
            'karma.templates',
            // load the json file that json2js plugin have convert to angular module and inject the constant
            'served/data.json'));

          beforeEach(inject(function (_$rootScope_, _$compile_, _servedData_) {
              
              $compile = _$compile_;
              scope = _$rootScope_;
              servedData = _servedData_;

              elm = '<div my-perogative></div>';

            compileElement();
        }));

          it('Test mocked json api & json2js plugin', function () {
               expect(servedData).toEqual({
                 prop: 'val'
             });
          });

        describe('when page compiles the perogative directive', function () {

            it('display directive button on page with interpolated value for button label', function () {
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
