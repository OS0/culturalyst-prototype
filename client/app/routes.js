(function(angular) {
  'use strict';
  angular
    .module('cult', ['ui.router'])
    .config(['$urlRouterProvider', '$stateProvider',
      function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
          .state('discovery', {
            url: '/',
            templateUrl: 'app/components/discovery/discoveryMainView.html'
          })
          .state('creative', {
            url: '/creative',
            templateUrl: 'app/components/creative/views/creativeView.html'
          })
          .state('catalyst', {
            url: '/catalyst',
            templateUrl: 'app/components/catalyst/views/catalystView.html'
          })
          .state('creativeSignUp', {
            url: '/creativeSignUp',
            templateUrl: 'app/components/auth/views/creativeSignUp.html'
          })
          .state('auth', {
            url: '/signIn-signUp',
            templateUrl: 'app/components/auth/views/creativeRewardsView.html'
          })
      }
    ]);
})(angular);
