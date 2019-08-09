const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(router);
 
app.get('/', function (req, res, next) {
  res.send('hello world')
})
 
app.listen(3333, function () {
  console.log('running at port 3333');
})

app.use(express.static('./../../dist'));