///////////////////////
//   Requirements    //
///////////////////////

//Database schema
var db = require('./db/schema.js');

///////////////////////
// Request-Handlers  //
///////////////////////

//Create new Creative user
exports.newUser = function(req, res) {
  var user = req.body;
  db.newUser(user.creative, user.name, user.email, user.password, user.location, user.bio, user.medium, user.submedium, user.picUrl, function(err, users) {
    if (err) {
      res.status(422).send(err);
    } else {
      res.status(200);
    }
  });
};

//Query all creatives from db
exports.getCreatives = function(req, res) {
  //pull data from requests
  db.getCreatives(function(err, creatives) {
    if (err && err !== "We couldn't find any creatives.") {
      console.log(err);
      res.status(401).send(err);
    } else {
      res.status(200).send(creatives);
    }
  });
};
