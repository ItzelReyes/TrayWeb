'use strict';

/**
 * @ngdoc function
 * @name angularTec1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTec1App
 */




myApp.controller('UsuarioCtrl', function ($scope,$log,$http,$location,$mdDialog) {
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

    $scope.hideDialog = function() {
      $mdDialog.hide({
        });

    }
    
    $scope.showDialog = function(ev) {       
    $mdDialog.show({
        //La función del controller toma una variable a ser inyectada definida en "locals", en este caso usuario
        controller: function Ctrl($scope,usuario) {
            console.log(usuario.nombre);
            $scope.usuario = usuario;

        },
        controllerAs: 'ctrl',
        targetEvent: ev,
        templateUrl: "views/dialog.html",
        locals: { //Todo lo que se pase en locals se inyecta
            usuario : $scope.modelo.usuarios[0]
            //Se define un atributo que contendrá aquello que se quiera inyectar
            //en este caso queremos inyectar el primer elemento del vector de usuarios
        }
    });    
        
    };

    
  });