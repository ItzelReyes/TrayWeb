'use strict';

var myApp = angular
  .module('myApp', ['ngAnimate','ngCookies','ngResource','ngRoute','ngSanitize','ngTouch','ngMap','ngMapAutocomplete']);

  myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
    })
      .when('/singup', {
        templateUrl: 'views/singup.html',
        controller: 'SingUpCtrl',
        controllerAs: 'singup'
    })
      .when('/singup_preferences', {
        templateUrl: 'views/singup_preferences.html',
        controller: 'SingUpPrefCtrl',
        controllerAs: 'singup_prefs'
    })
      .when('/singup_buscar_comedor', {
        templateUrl: 'views/buscarComedor.html',
        controller: 'SingUpBuscarCtrl',
        controllerAs: 'singup_buscar'
    })
      .when('/informacion', {
        templateUrl: 'views/informacion.html',
        controller: 'ComedorCtrl',
        controllerAs: 'comedor'
    })
      .when('/editarPerfil', {
        templateUrl: 'views/editarPerfil.html',
        controller: 'UsuarioCtrl',
        controllerAs: 'usuario'
    })
      .when('/perfil', {
        templateUrl: 'views/perfil.html',
        controller: 'UsuarioCtrl',
        controllerAs: 'usuario'
    })
      .when('/favoritos', {
        templateUrl: 'views/favoritos.html',
        controller: 'ComedorCtrl',
        controllerAs: 'comedor'
    })
      .when('/mostrarPreferencias', {
        templateUrl: 'views/mostrarPreferencias.html',
        controller: 'UsuarioCtrl',
        controllerAs: 'usuario'
    })
      .when('/home', {
        templateUrl: 'views/favoritos.html', //Cambiar nombre por home.html
        controller: 'homeCtrl',
        controllerAs: 'home'
        
    })
      .when('/friends', {
        templateUrl: 'views/friends.html', //Cambiar nombre por home.html
        controller: 'FriendsCtrl',
        controllerAs: 'amigos'
        
    })


      .when('/404', {
        templateUrl: 'views/404.html',
        controller: '404Ctrl',
        controllerAs: 'error404'
      })
      .when('/detalleFav', {
        templateUrl: 'views/detalleFav.html',
        controller: 'DetalleFavCtrl',
        controllerAs: 'detFav'
    })
      .when('/editarPreferencias', {
        templateUrl: 'views/editarPreferencias.html',
        controller: 'EditarPreferenciasCtrl',
        controllerAs: 'editPref'
    })
      .when('/preferencias', {
        templateUrl: 'views/preferencias.html',
        controller: 'PreferenciasCtrl',
        controllerAs: 'preferencias'
    })
      .when('/preferenciasReporte', {
        templateUrl: 'views/preferenciasReporte.html',
        controller: 'PrefReporteCtrl',
        controllerAs: 'prefReporte'
    })
      .when('/reportes', {
        templateUrl: 'views/reportes.html',
        controller: 'ReportesCtrl',
        controllerAs: 'reportes'
    })
      .when('/reservacion', {
        templateUrl: 'views/reservacion.html',
        controller: 'ReservacionCtrl',
        controllerAs: 'reservacion'
    })
      .otherwise({
        redirectTo: '/'
      });
  });
