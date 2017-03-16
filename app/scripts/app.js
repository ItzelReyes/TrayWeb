'use strict';

var myApp = angular
  .module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);

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
      .when('/home', {
        templateUrl: 'views/favoritos.html', //Cambiar nombre por home.html
        controller: 'homeCtrl',
        controllerAs: 'home'
        
    })
      .otherwise({
        redirectTo: '/'
      });
  });
