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

    $scope.hideDialog = function() {
      $mdDialog.hide({
        });

    }


    $scope.find = function(ev,dataSearch){

      angular.forEach($scope.modelo.usuarios, function(item){
        var flag=false;
        
        for(var i = 0; i < item.friends.length; i++){
            if(item.friends[i].nombre.toUpperCase() == dataSearch.toUpperCase()){ 
                $mdDialog.show({
                    controller: function Ctrl($scope, $mdDialog, item) {
                    $scope.data = item;
                },
                controllerAs: 'ctrl',
                targetEvent: ev,
                templateUrl: "views/show.html",
                clickOutsideToClose: true,
                locals: {
                    item : item.friends[i]
                }
            }); 
            $scope.notFound = "";
            flag = true;     
            }
        }
        if(flag == false){
            return $scope.notFound = "No encontrado";
            alert("hola");
        }
      })
    }

  });