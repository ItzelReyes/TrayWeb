'use strict';

describe('Controller: InformacionCtrl', function () {

  // load the controller's module
  beforeEach(module('claseAngularApp'));

  var InformacionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InformacionCtrl = $controller('InformacionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InformacionCtrl.awesomeThings.length).toBe(3);
  });
});
