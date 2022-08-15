let express = require('express');
let app = express();

require('dotenv').config();

let absolute_path = __dirname + '/views/index.html';
let static_path = __dirname + '/public';
let str = 'Hello json';

app.use(function (req, res, next) {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip);
  next();
})

app.use('/public', express.static(static_path))

app.get('/', function (req, res) {
  res.sendFile(absolute_path);
})

app.get('/json', function (req, res) {
  if(process.env.MESSAGE_STYLE == "uppercase") str = str.toUpperCase();
  res.json({'message': str});
})

app.get('/now', function(req, res, next){
  req.time = new Date().toString();
  next();
}, function(req, res){
  res.json({'time': req.time});
})






























 module.exports = app;
