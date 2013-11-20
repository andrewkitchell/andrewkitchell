'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }).
  directive('navlist', function () {
    return {
      restrict: 'E',
      templateUrl: '/partials/navlist.jade'
    };
  }).
  directive('demobutton', function () {
    return {
      restrict: 'E',
      templateUrl: "/partials/demo_button.jade"
    };
  }).
  directive('addtocart', function () {
    return {
      restrict: 'E',
      templateUrl: "/partials/add_to_cart.jade",
      transclude: true
    };
  });