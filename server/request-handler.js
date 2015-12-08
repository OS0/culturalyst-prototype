///////////////////////
//   Requirements    //
///////////////////////

//Database schema
var db = require('./db/schema.js')


///////////////////////
// Request-Handlers  //
///////////////////////

//Query all artists
exports.getArtists = function(req, res) {
  //pull data from requests
  db.getArtists();
}