var content = angular.module('cult.contentUpload', ['ngFileUpload']);


content.controller('UploadCtrl', ['$scope', 'Upload', '$timeout', 'signupService', '$log', function($scope, Upload, $timeout, signupService, $log) {

  signupService.newUserObject.data.authID = 'I changed this';

  $scope.$watch('files', function() {
    $scope.upload($scope.files);
  });
  $scope.$watch('file', function() {
    if ($scope.file != null) {
      $scope.files = [$scope.file];
    }
  });
  $scope.log = '';

  $scope.upload = function(files) {
    if (files && files.length) {
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        if (!file.$error) {
          Upload.upload({
            url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
            data: {
              username: $scope.username,
              file: file
            }
          }).progress(function(evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            $scope.log = 'progress: ' + progressPercentage + '% ' +
              evt.config.data.file.name + '\n' + $scope.log;
          }).success(function(data, status, headers, config) {
            $timeout(function() {
              $scope.log = 'file: ' + config.data.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
            });
          });
        }
      }
    }
  };
}]);
//end of testing testing testing
