
'use strict';

/**
 * @ngdoc function
 * @name proyectoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the proyectoAngularApp
 */

myApp.controller('DialogCtrl', function ($scope,$mdDialog, $log) {
    var modelo={
    	libro : [{nombre: '22/2/2017', apellidos: 'Gandhi', telefono: 'J.K', email: 'Harry Potter', nickname: '123456790'}]
    };
    $scope.modelo = modelo;
/*
    $scope.addBook = function(nombreT, apellidosT, telefonoT, emailT, nicknameT) {
  		$scope.modelo.libro.push({nombre : nombreT, apellidos : apellidosT, telefono : telefonoT, email : emailT, nickname : nicknameT});
  	};
*/

/* $scope.remove = function(request) { 
    var index = $scope.modelo.libro.indexOf(request);
    $scope.modelo.libro.splice(index, 1);     
    }
*/

/*
    $scope.remove = function(request){
      $scope.modelo.libro.splice($scope.modelo.libro.indexOf(request),1);       
    };
*/

    $scope.hideDialog = function() {
      $mdDialog.hide({
        });

    }

/*
    $scope.find = function(ev,dataSearch){

      angular.forEach($scope.modelo.libro, function(item){
      if(item.autor == (dataSearch) || item.titulo == dataSearch) { 
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
*/
    $scope.showDialog = function(ev,l) {        
    $mdDialog.show({
        controller: function Ctrl($scope, $mdDialog, l) {
            $scope.data = l;
        },
        controllerAs: 'ctrl',
        targetEvent: ev,
        templateUrl: "views/dialog.html",
        locals: {
            l : l
        }
    });    
        
    };

    
    
  });



