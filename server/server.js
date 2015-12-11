var path = require('path');
var express = require('express');

var logger = require('morgan');
var handler = require('./request-handler');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('client'));

app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});


app.get('/getCreatives', handler.getCreatives);
app.post('/newCreative', handler.newCreative);
