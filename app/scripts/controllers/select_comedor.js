'use strict'


myApp.controller('SingUpBuscarCtrl',['NgMap','$scope','$mdDialog', function(NgMap,$scope,$mdDialog){
    var vm = this;
    $scope.nombre = "";
    var modelo = {
        lugar: []
    };
    $scope.modelo = modelo;
    $scope.geocoder = new google.maps.Geocoder();
    
    
    //Accesso al servicio del mapa
    NgMap.getMap().then(function(map) {
        vm.map = map;
    });
    

    
    $scope.showDialog = function(ev,location) {                
        $mdDialog.show({
            controller: function Ctrl($scope, $mdDialog, loc) {
                $scope.direccionLugar = loc;
            },
            controllerAs: 'ctrl',
            targetEvent: ev,
            templateUrl: "views/dialog_comedor.html",
            locals: {
                loc : location
            }
        });    
    };
    
    
    
    /*La función searchComedor accede al método geocode del API geocoder de Google
    de tal forma que cuando se busca algo a través del input con ng-map-autocomplete
    se toma el texto con ng-model y se obtiene a través del servicio las coordenadas.
    
    El retorno de geocode devuelve a través de status la confirmación de que la consulta
    tuvo éxito o fracaso; a través de results devuelve un object que contiene un vector
    con todos los campos informativos, en este caso interesan las coordenadas.
    
    El método de ngMap que controla el mapa "setCenter", toma como parámetro un
    objeto LatLng que representa una latitud y longitud. Con la latitud y longitud
    obtenidas con "geocode" hecho object se cambia la posición del mapa.*/
    $scope.searchComedor = function () {
        console.log($scope.nombre);
            $scope.geocoder.geocode
    (
    {
        'address' : $scope.nombre
    }, function (results,status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var tmp = {
                nombre : $scope.nombre,
                direccion : results[0].formatted_address,
                latitud : results[0].geometry.location.lat(),
                longitud : results[0].geometry.location.lng()
            };

            var latlng = new google.maps.LatLng(tmp.latitud, tmp.longitud);
            vm.map.setCenter(latlng);
            
            var marker = new google.maps.Marker(
            {
                 map: vm.map,
                 position: latlng,

             });
            $scope.$apply($scope.modelo.lugar.push(tmp));
            console.log($scope.modelo.lugar);
        }
    }
    );
      

        
    };
}]);