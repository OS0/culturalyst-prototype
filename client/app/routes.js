angular
  .module('cult.ui-router', [
    'ui.router',
    'cult.contentUpload',
    'cult.discovery',
    'cult.signupRewards',
    'cult.signup'
  ])
  .config(['$urlRouterProvider', '$stateProvider',
    function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('discovery', {
          url: '/',
          templateUrl: 'app/components/discovery/discoveryMainView.html',
          controller: 'discoveryCtrl'
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
          templateUrl: 'app/components/auth/views/authMainView.html',
          controller: 'SignupParentsCtrl'
        })
        .state('creativeSignUp.creativeInfoView', {
          templateUrl: 'app/components/auth/views/sign-up/creativeInfoView.html'
        })
        .state('creativeSignUp.creativeContentView', {
          templateUrl: 'app/components/auth/views/sign-up/creativeContentView.html',
          controller: 'UploadCtrl'
        })
        .state('creativeSignUp.creativeRewardsView', {
          templateUrl: 'app/components/auth/views/sign-up/creativeRewardsView.html',
          controller: 'RewardsCtrl'
        })
        .state('creative.bio', {
          templateUrl: 'app/components/creative/views/creativeView.bio.html'
        })
        .state('creative.posts', {
          templateUrl: 'app/components/creative/views/creativeView.posts.html'
        })
        .state('creative.catalysts', {
          templateUrl: 'app/components/creative/views/creativeView.catalysts.html'
        })
        .state('mockDataButton', {
          url: '/mockDataButton',
          template: '<div><button ng-click="updateMockData()">update mock data</button></div>',
          controller: 'ResultsCtrl'
        })
    }
  ]);
