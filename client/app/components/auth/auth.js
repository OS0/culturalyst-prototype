  angular.module('cult.auth', [])

  .controller('AuthCtrl', ['$scope', function($scope, authFactory) {
  
    var signup = function(creative) {
      console.log(creative);
      return $http({
        method: 'POST',
        url: 'newCreative',
        data: creative
      })
      .then(function(res){
        if (res.status === 200) {
          console.log('User created: ')
        } else {
          console.log('Error while creating user')
        }
      })
    };

  }])
