'use strict';

/**
 * @ngdoc function
 * @name angularTec1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTec1App
 */



myApp.controller('ComedorCtrl', function ($scope,$log,$http) {
     var  modelo={
    };

   $http({
        method: 'GET',
        url: '/comedor.json'
        }).then(function successCallback(response) {
            $log.debug("successCallback"+response.data.comedores);
            $scope.modelo.comedores = response.data.comedores
          }, function errorCallback(response) {
            $log.debug("errorCallback");
        });
    $scope.modelo = modelo;
   
    
  });