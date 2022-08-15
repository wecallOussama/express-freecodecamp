let express = require('express');
let app = express();

let absolute_path = __dirname + '/views/index.html'
let static_path = __dirname + '/public'

app.use('/public', express.static(static_path))

app.get('/', function (req, res) {
  res.sendFile(absolute_path)
})

app.get('/json', function (req, res) {
  res.json({'message': 'Hello json'})
})
































 module.exports = app;
