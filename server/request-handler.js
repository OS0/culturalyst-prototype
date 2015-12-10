///////////////////////
//   Requirements    //
///////////////////////

//Database schema
// var db = require('./db/schema.js');
///////////////////////
// Request-Handlers  //
///////////////////////

//Query all creatives
exports.getCreatives = function(req, res) {
  //pull data from requests
  db.getCreatives(function(err, creatives) {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(200).send(creatives);
    }
  });
};
