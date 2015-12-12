angular.module('cult.results', ['cult.mockData'])

.controller('ResultsCtrl', ['$scope', '$http', 'mockDataArray', function($scope, $http, mockDataArray) {

  $scope.names = $scope.names || [];

  $scope.updateMockData = function() {
    $scope.getCreatives()
    .then(function() {
      console.log("Previous Users in Database: ", $scope.names);
      console.log("Updated Users in Database: ", mockDataArray);
      mockDataArray.forEach(function(creative) {
        if ($scope.names.indexOf(creative.name) === -1) {
          $scope.newUser(creative);
        }
      })
    })
  };

  /*Creative Object = {
    creative: Boolean,
    name: varchar,
    email: varchar,
    password: varchar,
    location: varchar,
    bio: varchar,
    medium: varchar,
    submedium: varchar,
    picUrl: varchar
  }
  */

  $scope.newUser = function(creative) {
    return $http({
            method: 'POST',
            url: 'newUser',
            data: creative
          })
          .then(function(res) {
            if (res.status === 200) {
              console.log("Data Updated: ", res.data)
            } else {
              console.log('Could not update database and JSON file');
            }
          });
  };

  $scope.getCreatives = function() {
    return $http({
      method: 'GET',
      url: 'getCreatives',
    }).then(function(res){
      if (res.status === 200 && res.data) {
        $scope.data = res.data;
        $scope.names = res.data.map(function(creatives) {
          return creatives.name;
        })
        // console.log('ResultsCtrl Scope Data: ', $scope.data);
        // console.log('ResultsCtrl Scope Names: ', $scope.names);
      } else {
        console.log('Error fetching creatives');
      }
    });
  };

}]);