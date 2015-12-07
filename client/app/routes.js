(function(angular) {
  'use strict';
  angular.module('cult', ['ngRoute']).config(
    function($routeProvider) {
      $routeProvider
        .when('/', {templatUrl: '/app/components/discovery/discoveryMainView.html'})
        //.when('/home', {templatUrl: '/app/components/discovery/discoveryMainView.html'})
        .when('/discovery', {templatUrl: '/app/components/discovery/discoveryMainView.html'})
        .when('/catalyst', {templatUrl: '/app/components/catalyst/view/catalystView.html'})
        .when('creative', {templatUrl: '/app/components/creative/view/creativeView.html'})
        .otherwise({redirectTo: '/'});
    }
  );
})(angular);
