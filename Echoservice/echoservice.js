var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
const { Console } = require('console');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.text({
  type: function (req) {
    return 'text';
  }
}));

app.post('/*', function (req, res) {
  var resObj = new Object();
  resObj.uri = req.url;
  resObj.method = 'POST';
  resObj.headers = req.headers;
  resObj.args = req.args;
  resObj.params = req.query;
  resObj.data = req.body;
  res = res.status(200);
  res = res.type('application/json');
  var resStr = JSON.stringify(resObj);
  console.log("**** Echoservice Log START ****");
  console.log(resStr);
  console.log("**** Echoservice Log END ****");
  res.send(resStr);
});

app.get('/*', function (req, res) {
  var resObj = new Object();
  resObj.uri = req.url;
  resObj.method = 'GET';
  resObj.headers = req.headers;
  resObj.args = req.args;
  resObj.params = req.query;
  resObj.data = req.body;
  res = res.status(200);
  res = res.type('application/json');
  var resStr = JSON.stringify(resObj);
  console.log("**** Echoservice Log START ****");
  console.log(resStr);
  console.log("**** Echoservice Log END ****");
  res.send(resStr);
});

http.createServer(app).listen(port);