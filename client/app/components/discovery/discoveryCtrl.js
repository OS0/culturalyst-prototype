/**
 * Created by VicYork on 12/7/15.
 */
//"use strict";
angular.module('cult')
  .controller('discoveryController', ['$scope', '$log',
    function($scope, $log) {
      $scope.alpha = 'this information was logged to the screen';
      $log.log($scope.alpha);
    }
  ]);
