'use strict';

/**
 * @ngdoc filter
 * @name claseAngularApp.filter:restaurantes
 * @function
 * @description
 * # restaurantes
 * Filter in the claseAngularApp.
 */
angular.module('myApp')
  .filter('restaurantes', function () {
  	return function(items, key, reverse) {
    var resultado = [];
    angular.forEach(items, function(item) {
      resultado.push(item);
    });
    resultado.sort(function (a, b) {
      return (a[key] > b[key] ? 1 : -1);
    });
    if(reverse) resultado.reverse();
    return resultado;
  };

  });

 