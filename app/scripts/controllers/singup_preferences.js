'use strict'

myApp.controller('SingUpPrefCtrl',['$scope','$location',function($scope,$location){
    
    
    $scope.checkboxModel = {
        value1: false,
        value2: false,
        value3: false,
        value4: false
    };
    
    $scope.enfermedadesDataPrefs = {
        opciones : [
            {id: '1', name: 'Colesterol'},
            {id: '2', name: 'Diabetes'},
            {id: '3', name: 'Hipertensión'},
            {id: '4', name: 'Triglicéridos'}
        ],
        selectedOption : {id: '1',name: 'Colesterol'}//Se guarda el valor seleccionado
    };
    
    $scope.alergenosDataPrefs = {
        opciones: [
            {id: '1', name: 'Glúten'},
            {id: '2', name: 'Cacahuate'},
            {id: '3', name: 'Lactosa'},
            {id: '4', name: 'Almidón'},
            {id: '5', name: 'Huevos'},
            {id: '6', name: 'Soya'}
        ],
        selectedOption: {id: '1', name: 'Glúten'}
    };
    
    
    $scope.getPreferences = function() {
        //Colectar la informacion de arriba
        $location.path('/singup_buscar_comedor');
    }
    
    
}]);



    