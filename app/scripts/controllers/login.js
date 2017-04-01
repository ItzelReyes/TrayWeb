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
    
    $scope.nick;
    $scope.pass;
    
    
    $scope.template = 'views/nav.html';
    
    $scope.modelo = modelo;
    $scope.passPattern = /^[a-zA-Z0-9]{8,15}/;
   
    
    
    $scope.getNickname = function () {
        
        if ($scope.nick == undefined) {
            $scope.hasError1 = true;
            console.log("nickIF" + $scope.hasError1);
            return false;
        } else {
            //$scope.modelo.login.nombreUsuario = $scope.nick;
            
            $scope.hasError1 = false;
            console.log("nickElse" + $scope.hasError1);
            return true;
        }
    }
    
    $scope.getPassword = function() {
        
        if ($scope.pass == undefined) {
            $scope.hasError2 = true;
            return false;      
        } else {
            $scope.hasError2 = false;
            return true;
        }
        
    }
    
    
    $scope.applyLogin = function () {

        if ($scope.getNickname() && $scope.getPassword()) {
            $location.path('/singup_preferences');
        }
    }
    
  }]);
