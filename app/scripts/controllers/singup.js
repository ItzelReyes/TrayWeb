'use strict';

myApp.controller('SingUpCtrl',['$scope','$location','$http', function($scope,$location,$http,$window) {

$scope.registrar = function(){
    var registroInsertar = {
        "nombre": $scope.nombre,
        "apellido": $scope.apellido,
        "telefono": $scope.telefono,
        "email" : $scope.email,
        "nickname": $scope.nickname,
        "edad" : $scope.edad,
        "password" : $scope.password,
       // "comidas": null,
      //  "enfermedades": null,
      //  "alergias": null
    }
    $http.post('http://localhost:8080/usuarios', registroInsertar)
        .then(function(response){
            var respuesta = response.data;
            $scope.resultadoInsercion =  respuesta;
            });
}

    var modelo = {
        register: {
            nombre : "",
            apellido: "",
            telefono: "",
            email: "",
            nickname: "",
            edad: "",
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
