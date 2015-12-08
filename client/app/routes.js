//(function(angular) {
//  'use strict';
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
          // or this ...
          //.state('discovery', {
          //  url: '/',
          //  views: {
          //    "main":{
          //      templateUrl: 'app/components/discovery/discoveryMainView.html'
          //      controller: 'discoveryController'
          //    }
          //  }
          //})
          .state('creative', {
            url: '/creative',
            templateUrl: 'app/components/creative/views/creativeView.html'
          })
          .state('catalyst', {
            url: '/catalyst',
            templateUrl: 'app/components/catalyst/views/catalystView.html'
          })
          // auth main view
          .state('creativeSignUp', {
            url: '/creativeSignUp',
            templateUrl: 'app/components/auth/views/authMainView.html',
            controller: 'authController'
          })
          // creative info view
          .state('creativeSignUp.creativeInfoView', {
            //parent:'auth',
            templateUrl: 'app/components/auth/views/sign-up/creativeInfoView.html'
          })
          // creative content view
          .state('creativeSignUp.creativeContentView', {
            //parent:'auth',
            templateUrl: 'app/components/auth/views/sign-up/creativeContentView.html'
          })
          // creative rewards view
          .state('creativeSignUp.creativeRewardsView', {
            //parent:'auth',
            templateUrl: 'app/components/auth/views/sign-up/creativeRewardsView.html'
          });
      }
    ]);
//})(angular);
