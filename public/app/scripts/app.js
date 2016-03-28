'use strict';

/**
 * @ngdoc overview
 * @name angularEshopApp
 * @description
 * # angularEshopApp
 *
 * Main module of the application.
 */
angular
  .module('angularEshopApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'duScroll'
  ])
  .value('duScrollDuration', 1000)
  .value('duScrollOffset', 30)
  .config(function ($routeProvider) {


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
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope) {


    new WOW().init();

  });
