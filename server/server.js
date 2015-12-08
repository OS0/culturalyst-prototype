var express = require('express');

var logger = require('morgan');
var handler = require('./request-handler');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.envPORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

var routes = express.Router();
routes.get('/getCreatives', handler.getCreatives);

