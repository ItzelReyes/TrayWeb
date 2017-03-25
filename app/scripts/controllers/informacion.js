'use strict';

/**
 * @ngdoc function
 * @name claseAngularApp.controller:InformacionCtrl
 * @description
 * # InformacionCtrl
 * Controller of the claseAngularApp
 */
angular.module('myApp')
  .controller('InformacionCtrl', function ($scope, $SharedDataService) {
        $scope.Comedor = SharedDataService;

  });