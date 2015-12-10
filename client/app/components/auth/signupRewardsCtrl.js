angular.module('cult.signupRewards', [])
  .controller('RewardsCtrl', ['$scope', '$log', '$interval', function($scope, $log, $interval) {
    $log.log('this is the rewards controller');

    //$scope.user = {
    //  defaultRewards: {
    //    dr00: {title: drt00, description: drd00},
    //    dr01: {title: drt01, description: drd01},
    //    dr02: {title: drt02, description: drd02},
    //    dr03: {title: drt03, description: drd03}
    //  }
    //};

    //$interval(function() {
      //$log.log($scope.user.defaultRewards.dr00);
    //}, 100);

    $scope.rewardFields = [];

    $scope.addField = function() {
      $scope.rewardFields.push({});
    };

    //var checkLength = function() {
    //  if ($scope.rewardFields.length > 3) {
    //    $log.log('you\'ve added more than 3');
    //  } else {
    //    $log.log('add more');
    //  }
    //};

    //$interval(checkLength, 1111);

  }]);