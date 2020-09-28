var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
const { Console } = require('console');
const url = require('url');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.text({
  type: function (req) {
    return 'text';
  }
}));

app.post('/*', function (req, res) {
  //var q = url.parse(req.url, true);
  var resObj = new Object();
  resObj.uri = req.url;
  resObj.method = 'POST';
  resObj.headers = req.headers;
  resObj.args = req.args;
  resObj.params = req.query;
  resObj.data = req.body;
  res = res.status(200);
  res = res.type('application/json');
  //console.log("Request Path : " + q.path);
  var resStr = JSON.stringify(resObj);
  console.log("**** START ****");
  console.log(resStr);
  console.log("**** END ****");
  res.send(resStr);
});

app.get('/*', function (req, res) {
  //var q = url.parse(req.url, true);
  var resObj = new Object();
  resObj.uri = req.url;
  resObj.method = 'GET';
  resObj.headers = req.headers;
  resObj.args = req.args;
  resObj.params = req.query;
  resObj.data = req.body;
  res = res.status(200);
  res = res.type('application/json');
  //console.log("Request Path : " + q.path);
  var resStr = JSON.stringify(resObj);
  console.log("**** START ****");
  console.log(resStr);
  console.log("**** END ****");
  res.send(resStr);
});

http.createServer(app).listen(port);