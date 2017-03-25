'use strict';

/**
 * @ngdoc filter
 * @name claseAngularApp.filter:restaurantes
 * @function
 * @description
 * # restaurantes
 * Filter in the claseAngularApp.
 */
angular.module('claseAngularApp')
  .filter('restaurantes', function () {
    return function (input) {
      return 'restaurantes filter: ' + input;
    };
  });
