'use strict';

describe('Filter: restaurantes', function () {

  // load the filter's module
  beforeEach(module('claseAngularApp'));

  // initialize a new instance of the filter before each test
  var restaurantes;
  beforeEach(inject(function ($filter) {
    restaurantes = $filter('restaurantes');
  }));

  it('should return the input prefixed with "restaurantes filter:"', function () {
    var text = 'angularjs';
    expect(restaurantes(text)).toBe('restaurantes filter: ' + text);
  });

});
