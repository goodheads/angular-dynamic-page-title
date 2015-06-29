

// define the module

var app = angular.module('myApp', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
        url: '/',
        views: {
          '' : {
            templateUrl: '../partials/home-nav.html',
            controller: 'HomeCtrl'
          },
          'theView@home': {
            templateUrl: '../partials/landing.html',
            controller: 'HomeCtrl'
          }
        }
      })

      .state('about', {
        url: '/about',
        views: {
          '' : {
            templateUrl: '../partials/home-nav.html',
            controller: 'AboutCtrl'
          },
          'theView@about': {
            templateUrl: '../partials/about.html',
            controller: 'AboutCtrl'
          }
        },
        data: {
          pageTitle: 'About'
        }
      })

      .state('contact', {
        url: '/contact',
        views: {
          '' : {
            templateUrl: '../partials/home-nav.html',
            controller: 'ContactCtrl'
          },
          'theView@contact': {
            templateUrl: '../partials/contact.html',
            controller: 'ContactCtrl'
          }
        },
        data: {
          pageTitle: 'Contact'
        }
      })

      .state('faq', {
        url: '/faq',
        views: {
          '' : {
            templateUrl: '../partials/home-nav.html',
            controller: 'FaqCtrl'
          },
          'theView@faq': {
            templateUrl: '../partials/faq.html',
            controller: 'FaqCtrl'
          }
        },
        data: {
          pageTitle: 'FAQ'
        }
      });

  }]);