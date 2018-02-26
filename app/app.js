var app = angular.module('dashboard', [
    'ui.router',
    'oc.lazyLoad',
    'LocalStorageModule',
    'ngSanitize'
  ]);
  
  app.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({});
  }]);
  
  app.config(['$controllerProvider', function($controllerProvider) {
    $controllerProvider.allowGlobals();
  }]);
  
  
  app.constant('URLS', {
    api: "http://localhost/muebleriasahorramas/v1/"
  });
  

  app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/");



    $stateProvider
      .state("start", {
        templateUrl: "app/views/inicio.html",
        data: {
          pageTitle: 'Home'
        },
        controller: function($rootScope, $scope) {
          $rootScope.pageTitle = 'Bienvenido';

        }
      })

      .state("start.home", {
        url: "/",
        templateUrl: "app/views/inicio.html",
        data: {
          pageTitle: 'Home'
        },
        controller: "MainController",
        resolve: {
          deps: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name: 'dashboard',
              files: [
                'app/controllers/MainController.js'
              ]
            });
          }]
        }
      })

    }
  ]);

  app.run(function($rootScope, localStorageService, $location, $state) {
    $rootScope.$state = $state;
    
  });

