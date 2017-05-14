'use strict';

/**
 * @ngdoc function
 * @name claseAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the claseAngularApp
 */
myApp.controller('LoginCtrl',['$scope','$location', '$http', '$window', function ($scope,$location,$http,$window) {


    $scope.login = function(){
        $http.post('http://localhost:8080/api/login',{
            username : "Administrador",
            password : "Luigi54"
        }).then(function(response){
            $window.sessionStorage.token = response.data.access_token
            console.log(response.data.access_token);
        });
    };
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

            $location.path('/singup_preferences');
    }
    
  }]);
