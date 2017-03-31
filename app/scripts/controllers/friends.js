'use strict';

/**
 * @ngdoc function
 * @name angularTec1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTec1App
 */



myApp.controller('FriendsCtrl', function ($scope,$log,$http,$location,SharedDataService,$mdDialog) {
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

    $scope.hideDialog = function() {
//      $scope.notFound = "Si esdsdsdsdssncontrado";
      $mdDialog.hide({
        });

    }

    $scope.showDialog = function(ev,usuario) {        
    $mdDialog.show({
        controller: function Ctrl($scope, $mdDialog, usuario) {
            $scope.data = usuario;
        },
        controllerAs: 'ctrl',
        targetEvent: ev,
        templateUrl: "views/dialog.html",
        locals: {
            usuario : usuario
        }
    });    
        
    };

    $scope.find = function(ev,dataSearch){

      angular.forEach($scope.modelo.usuarios, function(item){
      if(item.friends.friend1.nombre == dataSearch) { 
        $mdDialog.show({
        controller: function Ctrl($scope, $mdDialog, item) {
            $scope.data = item;
        },
        controllerAs: 'ctrl',
        targetEvent: ev,
        templateUrl: "views/show.html",
        locals: {
            item : item
        }
    }); 
        $scope.notFound = "";
      }else{
         return $scope.notFound = "No encontrado";
      }
      })
    }
  });