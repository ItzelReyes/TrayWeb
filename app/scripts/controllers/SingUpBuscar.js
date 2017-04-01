'use strict';

/**
 * @ngdoc function
 * @name angularTec1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTec1App
 */



myApp.controller('SingUpBuscarCtrl', function ($scope,$log,$http,$location) {
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
   
    $scope.getFav2 = function() {
        //Colectar la informacion de arriba
        $location.path('/favoritos');
    }

    $scope.hideDialog = function() {
      $mdDialog.hide({
        });

    }
    
  });