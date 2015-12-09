/** This is an Auth services if needed */
(function(angular) {
  "use strict";
  angular.module('cult.authService', [])
    // .service('',)
    .factory('authFactory', function($http) {
      var mockData = {
        1: {
          name: 'Olufemi',
          picurl: 'http://www.iefashionfix.com/en/wp-content/uploads/2015/08/Afropunk-Looks-25.jpg',
          medium: 'Author',
          submedium: 'Poetry'
        },
        2: {
          name: 'Amaury',
          picurl: 'http://res.cloudinary.com/thefader/image/upload/s--Y_A8bvhG--/w_1440,c_limit,q_jpegmini,f_auto/FV2A7663_vbofps.jpg',
          medium: 'Musician',
          submedium: 'Vocalist'
        },
        3: {
          name: 'Cormac',
          picurl: 'http://media.vocativ.com/photos/2015/01/Hipster-Statistics-001928277552.jpg',
          Medium: 'Author',
          mediumdium: 'Non-fiction'
          },
        4: {
          name: 'Fidda',
          picurl: 'http://i.dailymail.co.uk/i/pix/2015/03/10/2681F94C00000578-2986776-image-a-1_1426005646716.jpg',
          medium: 'Musician',
          submedium: 'Guitar'
        }
      };
      var signup = function(creative) {
        return $http({
          method: 'POST',
          url: '/newCreative',
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
      var createMockData = function() {
        console.log('Creating mock data');
        mockData.forEach(function(creative) {
          signup(creative);
        })
      }
      return {
        signup: signup,
        createMockData: createMockData
      }
    });

//   function() {

//   }

})(angular);