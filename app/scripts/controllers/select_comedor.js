'use strict'


myApp.controller('SingUpBuscarCtrl',['NgMap','$scope', function(NgMap,$scope){
    var vm = this;
    $scope.nombre = "";
    var modelo = {
        lugar: []
    };
    $scope.modelo = modelo;
    $scope.coordenadas = {};
    $scope.geocoder = new google.maps.Geocoder();
    
    $scope.isEmpty = function () {
        if ($scope.modelo.lugar == []) {
            return true;
        } else {
            return false;
        }
    }
    
    NgMap.getMap().then(function(map) {
        vm.map = map;
    });
    
    $scope.add = function (localizacion) {
        $scope.modelo.lugar.push(localizacion);
    }
    
    $scope.searchComedor = function () {
            $scope.geocoder.geocode
    (
    {
        'address' : $scope.nombre
    }, function (results,status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var tmp = {
                nombre : $scope.modelo.nombre,
                direccion : results[0].formatted_address,
                latitud : results[0].geometry.location.lat(),
                longitud : results[0].geometry.location.lng()
            };

            $scope.latlng = new google.maps.LatLng(tmp.latitud, tmp.longitud);
            vm.map.setCenter($scope.latlng);
            
            var marker = new google.maps.Marker(
            {
                 map: vm.map,
                 position: $scope.latlng,

             });
            $scope.add(tmp);
            
        }
    }
    );
      

        
    };
}]);