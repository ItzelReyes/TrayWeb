'use strict';

/**
 * @ngdoc function
 * @name claseAngularApp.controller:ReservacionCtrl
 * @description
 * # ReservacionCtrl
 * Controller of the claseAngularApp
 */
myApp.controller('ReservacionCtrl', function ($scope, $http, $window) {
   
$scope.reservar = function(){
	var reservacionInsertar = {
 	  	"fecha": $scope.fecha,
 	  	"hora": $scope.hora,
   		"res": $scope.res,
   		"pollo" : $scope.pollo,
   		"pescado": $scope.pescado,
   		"vegetariano" : $scope.vegetariano
  	}
   	
   	$http.post('http://localhost:8080/prefDiarias', reservacionInsertar)
   		.then(function(response){
   			var respuesta = response.data;
   			$scope.resultadoInsercion =  respuesta;
    		});
}

  });