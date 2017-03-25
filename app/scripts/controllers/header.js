'use strict';

/**
 * @ngdoc function
 * @name angularTec1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTec1App
 */




myApp.controller('HeaderCtrl', function ($scope,$location) {
     var  modelo={
    };

    $scope.modelo = modelo;

    $scope.getProfile = function() {
        //Colectar la informacion de arriba
        $location.path('/perfil');
    }

    $scope.getBuscarComedor = function() {
        //Colectar la informacion de arriba
        $location.path('/singup_buscar_comedor');
    }
    
    $scope.getFavoritos = function() {
        //Colectar la informacion de arriba
        $location.path('/favoritos');
    }

    $scope.getFoodFacts = function() {
        //Colectar la informacion de arriba
        $location.path('/perfil');
    }

    $scope.getAmigos = function() {
        //Colectar la informacion de arriba
        $location.path('/friends');
    }

    $scope.getReportes = function() {
        //Colectar la informacion de arriba
        $location.path('/reportes');
    }
       
    $scope.getCerrarSesion = function() {
        //Colectar la informacion de arriba
        $location.path('/');
    }

  });