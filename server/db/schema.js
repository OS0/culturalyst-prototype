var Sequelize = require('sequelize');
var sequelize = new Sequelize('culturalyst', 'root', null, {});
//var Promise = require('bluebird');

// Creatives
var User = sequelize.define('User', {
  creative: Sequelize.BOOLEAN,
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  location: Sequelize.STRING,
  bio: Sequelize.TEXT,
  medium: Sequelize.STRING,
  submedium: Sequelize.STRING,
  picUrl: Sequelize.STRING
});

// var Content = sequelize.define('Content', {
//   picUrl: Sequelize.STRING
// })

// //DATABASE RELATIONSHIPS
// //users have many submedia, submedia has many users
// User.belongsToMany(Media, { through: 'User_Media' });
// Media.belongsToMany(User, { through: 'User_Media' });

// //creative and catalyst join table
// User.hasMany(User, { as: 'Catalysts' });

// //users have many contents, contents have one user
// User.hasMany(Content, { as: 'Content' });

// Creates table if it does not exist
sequelize.sync();


// Helper functions
exports.newUser = function(creative, name, email, password, location, bio, medium, submedium, picUrl, callback) {
  User.findAll({ where: { email: email } })
    .then(function(users){
      if ( users.length > 0 ) {
        callback('Email already attached to account.')
      } else {
        User.create({
          creative: creative,
          name: name,
          email: email,
          password: password, //NEED TO BCRYPT!!!!!!!
          location: location,
          bio: bio,
          medium: medium,
          submedium: submedium,
          picUrl: picUrl
        })
        .catch(function(err) {
          if (err) {
            console.log('While creating new user: ' + err);
          }
        });
      }
    });
};

exports.getCreatives = function(callback) {
  User.findAll({ where: { creative: true } }).then(function(creatives){
    if (creatives.length) {
      callback(null, creatives);
    } else {
      callback("We couldn't find any creatives.");
    }
  });
};
