
'use strict';

myApp.controller('DialogCtrl', function ($scope,$mdDialog, $log) {
    var modelo={
    	libro : [{nombre: '22/2/2017', apellidos: 'Gandhi', telefono: 'J.K', email: 'Harry Potter', nickname: '123456790'}]
    };
    $scope.modelo = modelo;


    $scope.hideDialog = function() {
      $mdDialog.hide({
        });

    }

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



