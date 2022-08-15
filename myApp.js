let express = require('express');
let app = express();

require('dotenv').config()

let absolute_path = __dirname + '/views/index.html'
let static_path = __dirname + '/public'

app.use('/public', express.static(static_path))

app.get('/', function (req, res) {
  res.sendFile(absolute_path)
})

app.get('/json', function (req, res) {
  let str = 'Hello json'
  if(process.env.MESSAGE_STYLE == "uppercase") str = str.toUpperCase()
  res.json({'message': str})
})
































 module.exports = app;
