'use strict';

describe('Controller: ReservancionJsCtrl', function () {

  // load the controller's module
  beforeEach(module('claseAngularApp'));

  var ReservancionJsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReservancionJsCtrl = $controller('ReservancionJsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReservancionJsCtrl.awesomeThings.length).toBe(3);
  });
});
