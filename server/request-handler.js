///////////////////////
//   Requirements    //
///////////////////////

//Database schema
var db = require('./db/schema.js')


///////////////////////
// Request-Handlers  //
///////////////////////

//Create new Creative user
exports.newCreative = function(req, res) {
  db.newCreative(function(err, creatives) {
    if (err) {
      res.status(422).send(err);
    } else {
      res.status(200);
    }
  });
}

//Query all artists
exports.getCreatives = function(req, res) {
  //pull data from requests
  db.getCreatives(function(err, creatives) {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(creatives);
    }
  });
}