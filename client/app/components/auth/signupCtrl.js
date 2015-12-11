angular.module('cult.signup', [])
  .controller('SignupParentsCtrl', ['$scope', '$log', '$interval', 'signupService', '$http',
    function($scope, $log, $interval, signupService, $http) {
      //$scope.submit = function() {
      //  $http.post('/conntection_to_db', signupService.newUserObject)
      //    .then(function successCallback(response) {
      //      // this callback will be called asynchronously when the response
      //      // is available
      //      $log.log('post request was received successfully');
      //    }, function errorCallback(response) {
      //      // called asynchronously if an error occurs or server returns
      //      // response with an error status.
      //      $log.log('post request was not sent successfully');
      //    });
      //};

      //$scope.sendPost = function() {
      //  var data = $.param({
      //    json: JSON.stringify({
      //      name: signupService.newUserObject
      //    })
      //  });
      //  $http.post("/echo/json/", data)
      //    .success(function(data, status) {
      //      $scope.signupResponse = 'Thank you for joining the community.';
      //      $log.info('successful');
      //    })
      //    .error(function(data, status) {
      //      $scope.signupResponse = 'Uhh oh, something went wrong! Can you' +
      //        ' please go back and check your profile?';
      //      $log.info('failed');
      //    });
      //};

      var data = {user: signupService.newUserObject};
      var url = {url: 'localhost:3000/post'};
      $scope.submitSignup = function() {
        $log.info('this was called');
        // data or data.user
        $http.post(url.url, data.user)
          .success(function(data) {
            $log.info('Success: ' + data);
          })
          .error(function(data) {
            $log.error('Failed: ' + data);
          });
      };
    }
  ]);