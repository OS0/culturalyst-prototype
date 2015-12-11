angular.module('cult.signupRewards', [])
  .controller('RewardsCtrl', ['$scope', '$log', '$interval', 'signupService',
    function($scope, $log, $interval, signupService) {

      // Adds a new reward field to the page
      $scope.rewardFields = [];
      $scope.addField = function() {
        $scope.rewardFields.push({});
      };

      $scope.signupService = signupService;

      $interval($log.log(signupService.newUserObject.data.rewards.defaultRewards.d0.title), 100);

      $log.log(signupService);

      //var checkLength = function() {
      //  if ($scope.rewardFields.length > 3) {
      //    $log.log('you\'ve added more than 3');
      //  } else {
      //    $log.log('add more');
      //  }
      //};
      //
      //$interval(checkLength, 1111);

    }
  ]);