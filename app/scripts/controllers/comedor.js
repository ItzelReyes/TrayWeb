'use strict';

/**
 * @ngdoc function
 * @name angularTec1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTec1App
 */




myApp.controller('ComedorCtrl',['$scope', function ($scope) {
    
   var modelo={
      profesor : "Juan Velez",
      alumnos : [{id: 1,nombre: "Jose", matricula: "A00032323" ,carrera: "ITC",estatus:false},
            {id: 2, nombre: "Alejandro", matricula: "A08765223",carrera: "ITC",estatus:false}, 
            {id: 3, nombre: "Daniela", matricula: "A01323883", carrera: "ITC",estatus: true}]
    };
    
    $scope.modelo = modelo;

    
  }]);




