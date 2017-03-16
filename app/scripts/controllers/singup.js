'use strict';

myApp.controller('SingUpCtrl',['$scope', function($scope) {
    
    var modelo = {
        register: {
            nombre : "",
            apellidos: "",
            telefono: "",
            email: "",
            nickname: "",
            password: ""
        }
    };
    
    $scope.modelo = modelo;
    
    var getNombre = function () {
        if ($scope.nombre == undefined) {
            alert("Error");//Highlight en rojo y mensaje aclarativo de que no se introdujo el valor
        } else {
            $scope.register.nombre = $scope.nombre;
        }
    }
    
    $scope.getRegister = function () {
        getNombre();
    }
}]);