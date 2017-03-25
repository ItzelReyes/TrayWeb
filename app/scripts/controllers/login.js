'use strict';

/**
 * @ngdoc function
 * @name claseAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the claseAngularApp
 */
myApp.controller('LoginCtrl',['$scope','$location', function ($scope,$location) {
    
    var modelo = {
        login : {
            nombreUsuario: "",
            password: ""
        }
        
    };
    
    var nick;
    
    $scope.modelo = modelo;
    $scope.passPattern = /^[a-zA-Z0-9]{8,15}/;
    $scope.getNickname = function () {
        
        if ($scope.nick == undefined) {
            alert("Error de nickname");
        } else {
            $scope.modelo.login.nombreUsuario = $scope.nick;
        }
    }
    
    $scope.getPassword = function() {
        
        if ($scope.pass == undefined) {
            alert("Error de password");//Highlight en rojo y mensaje aclarativo de que no se introdujo el valor
        } else {
            $scope.modelo.login.password = $scope.pass
        }
        
    }
    
    
    $scope.applyLogin = function () {
        //Se toman los valores del login y se hace algo
        $scope.getNickname();
        $scope.getPassword();
        //$location.path('/singup_preferences');
    }
    
  }]);
