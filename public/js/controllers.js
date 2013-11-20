'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function($scope, $http, $route, $rootScope, $location) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

    $scope.reloadCtrl = function(){
      console.log('reloading...');
      $route.reload();
    };

  }).

  controller('NavCtrl', function($scope, $location, $route) {

    $scope.isActive = function(route) {
        return route === $location.path();
    };

  }).

  controller('BlogCtrl', function($scope, $location, $route) {

    $scope.name = 'Blog';

  }).

  controller('LandingCtrl', function($scope) {
    $scope.name = 'Landing';

    $scope.demoGuide = function() {
      alert('heyo');
    };

  });