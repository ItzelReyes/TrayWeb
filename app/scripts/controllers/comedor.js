'use strict';

/**
 * @ngdoc function
 * @name angularTec1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTec1App
 */


angular.module('claseAngularApp')
  .controller('MainCtrl', function ($scope,$log,$http) {
  	 var  modelo={
      profesor : "Juan Velez",
    };

    $scope.settings={
      green :"Green",
      red : "Red" 
    }

   $http({
        method: 'GET',
        url: '/comedor.json'
        }).then(function successCallback(response) {
            $log.debug("successCallback"+response.data.alumnos);
            $scope.modelo.alumnos = response.data.alumnos
          }, function errorCallback(response) {
            $log.debug("errorCallback");
        });
    $log.debug("en el controlador"+modelo)
    $scope.Red =""
  	modelo.carrerasDisponibles = ['ITC','ITI','IEC'];
  	$scope.modelo = modelo;
   $scope.cuentaAsistentes= function(){
   	 var cuenta = 0;
   	 angular.forEach($scope.modelo.alumnos, function(item){
   	 	if(item.estatus) cuenta++;
   	 })
   	 return cuenta;
   };
   $scope.alertaAlumnos = function(){
   	    return $scope.cuentaAsistentes()< 2 ?
   	    		"label-danger":"label-success";
   }
   $scope.addAlumno = function(alumno){
   					$log.debug('el valor de alumno id:'+alumno.id);
   					if(alumno.id==undefined ||alumno.id==null){
   			  		$scope.modelo.alumnos.push({id:$scope.modelo.alumnos.length,nombre:alumno.nombre,matricula:alumno.matricula, carrera:alumno.carrera,estatus: false});
   			  	}else{
   			  		$scope.alumnoInput = null;
   			  	}

   		
 
   }
   $scope.editar = function(alumno){
   		$log.debug('el valor de alumno id:'+alumno.id);
   		$scope.alumnoInput = alumno
   }


    
  });







