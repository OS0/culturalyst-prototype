angular.module('cult.signupService', [])
  .service('signupService', [function() {
    return {
      newUserObject: {
        data: {
          authID:null,
          info: {},
          content: {
            profileImage: {img: null},
            bannerImage: {img: null}
          },
          rewards: {
            defaultRewards: {
              d0: {
                price: null,
                title: null,
                description: null
              },
              d1: {
                price: null,
                title: null,
                description: null
              },
              d2: {
                price: null,
                title: null,
                description: null
              },
              d3: {
                price: null,
                title: null,
                description: null
              }
            },
            customRewards: {}
          }
        }
      }
    };
  }]);
