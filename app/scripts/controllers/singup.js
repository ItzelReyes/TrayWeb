'use strict';

myApp.controller('SingUpCtrl',['$scope','$location', function($scope,$location) {

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
    $scope.passPattern = /^[a-zA-Z0-9]{8,15}/;
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
        $location.path("/singup_preferences");
    }
}]);
