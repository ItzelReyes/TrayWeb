'use strict';
/**
 * @ngdoc service
 * @name claseAngularApp.SharedDataService
 * @description
 * # SharedDataService
 * Service in the claseAngularApp.
 */
angular.module('myApp')
  .service('SharedDataService', function ($log) {
  	var comedores;
  	return {
      getComedores: function () {
        $log.debug("En el setComedorService:"+comedores);
        return this.comedores;
      },
      setComedores:function (comedores) {
        $log.debug("En el getComedorService:"+this.comedores);
         this.comedores = comedores;
      }
    }; 
  });