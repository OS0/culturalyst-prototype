var Sequelize = require('sequelize');
var sequelize = new Sequelize('culturalyst', 'root', null, {});
var Promise = require('bluebird');

// Creatives
var Creative = sequelize.define('creatives', {
    name: Sequelize.STRING,
    picurl: Sequelize.STRING,
    medium: Sequelize.STRING,
    submedium: Sequelize.STRING
});


// Creates table if it does not exist
sequelize.sync();


// Helper functions
exports.newCreative = function(name, picurl, medium, submedium, callback) {
  Creative.findAll({ where: { name: name } })
    .then(function(creatives){
      if ( creatives.length > 0 ) {
        callback('Name already taken')
      } else {
        Creative.create({
          name: name,
          picurl: picurl,
          medium: medium,
          submedium: submedium
        })
        .catch(function(err) {
          console.log('Create: ' + err);
        });
      }
    });
};

exports.getCreatives = function(callback) {
  Creative.findAll().then(function(creatives){
    if (creatives.length) {
      callback(null, creatives);
    } else {
      callback("We couldn't find any creatives")
    }
  });
};
