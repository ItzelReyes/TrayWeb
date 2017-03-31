'use strict';

/**
 * @ngdoc function
 * @name angularTec1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTec1App
 */



myApp.controller('FriendsCtrl', function ($scope,$log,$http,$location,SharedDataService) {
     var  modelo={
    };

   $http({
        method: 'GET',
        url: '/usuario.json'
        }).then(function successCallback(response) {
            $log.debug("successCallback"+response.data.usuarios);
            $scope.modelo.usuarios = response.data.usuarios
          }, function errorCallback(response) {
            $log.debug("errorCallback");
        });
    $scope.modelo = modelo;
/*
    $scope.getFav = function() {
        //Colectar la informacion de arriba
        $location.path('/favoritos');
    }
    
    $scope.getBuscarComedor = function() {
        //Colectar la informacion de arriba
        $location.path('/singup_buscar_comedor');
    }
*/

  });