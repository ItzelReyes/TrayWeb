'use strict';

/**
 * @ngdoc function
 * @name claseAngularApp.controller:InformacionCtrl
 * @description
 * # InformacionCtrl
 * Controller of the claseAngularApp
 */
angular.module('myApp')
  .controller('InformacionCtrl', function ($scope, $log, SharedDataService) {
    $log.debug("Estoy en el destino controller"+SharedDataService.getComedores());
   	$scope.comedores = SharedDataService.getComedores();
  });