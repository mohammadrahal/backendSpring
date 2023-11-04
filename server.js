// start 
const express = require('express');
require('dotenv').config();

const cors = require('cors')
const bodyParser = require('body-parser')
const connect = require('./config/db')
const PORT = process.env.PORT || 5000;
const app = express();
// calling 
app.use(cors());
app.use(bodyParser.json());






app.get('/', (req, res) => {
    res.send('welcome!')
  })

  app.listen(PORT, () => {
    connect()
    console.log(`Example app listening on port ${PORT}`)
  })