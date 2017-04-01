'use strict';

describe('Controller: ReservacionCtrl', function () {

  // load the controller's module
  beforeEach(module('claseAngularApp'));

  var ReservacionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReservacionCtrl = $controller('ReservacionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReservacionCtrl.awesomeThings.length).toBe(3);
  });
});
