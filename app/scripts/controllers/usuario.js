'use strict';

/**
 * @ngdoc function
 * @name angularTec1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTec1App
 */




myApp.controller('UsuarioCtrl', function ($scope,$log,$http,$location) {
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
   

    $scope.edit = function(usuario) {
      $scope.usuarioInput = usuario;
    }

    $scope.getPreferences = function() {
        //Colectar la informacion de arriba
        $location.path('/mostrarPreferencias');
    }
    
    $scope.editProfile = function() {
        //Colectar la informacion de arriba
        $location.path('/editarPerfil');
    }
    
    $scope.getProfile = function() {
        //Colectar la informacion de arriba
        $location.path('/perfil');
    }
    
  });