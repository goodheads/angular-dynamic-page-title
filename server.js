// Load Our Modules

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', process.env.PORT || 5000);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});