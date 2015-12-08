(function(angular) {
  'use strict';
  angular.module('cult', ['ngRoute']).config(
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/components/discovery/discoveryMainView.html'
        })
        .when('/discovery', {
          templateUrl: 'app/components/discovery/discoveryMainView.html'
        })
        .when('/creative', {
          templateUrl: 'app/components/creative/view/creativeView.html'
        })
        .when('/catalyst', {
          templateUrl: 'app/components/catalyst/view/catalystView.html'
        })
        .otherwise({redirectTo: '/'});
    }
  );
})(angular);
