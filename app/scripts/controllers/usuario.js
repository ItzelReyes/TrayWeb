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

  
   $http.get('http://localhost:8080/usuarios/2')
   .then(function successCallback(response) {
            $log.debug("successCallback"+response.data);
            $scope.modelo.usuarios = response.data
          }, function errorCallback(response) {
            $log.debug("errorCallback");
        });

   /* $scope.listado = function(){
        $http.get('http://localhost:8080/usuarios/1')
        .then(function(response){
            var listado = response.data;
            $scope.usuarios = listado;
        });
    }*/
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