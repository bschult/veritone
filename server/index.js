const express = require('express')
const bodyParser = require("body-parser");
const path = require('path');
const pino = require('express-pino-logger')();
const app = express();
const port = 3000
require('./util/DB');

app.use(pino);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})