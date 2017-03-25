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
     return function(items, field, reverse) {
    var filtered = [];
    angular.forEach(items, function(item) {
      filtered.push(item);
    });
    filtered.sort(function (a, b) {
      return (a[field] > b[field] ? 1 : -1);
    });
    if(reverse) filtered.reverse();
    return filtered;
  };

  });