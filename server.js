// start 
const express = require('express');
require('dotenv').config();

const cors = require('cors')
const bodyParser = require('body-parser')
const connect = require('./config/db')
const PORT = process.env.PORT || 5000;
const app = express();
const fertilzerRoute = require('./routes/FertilzerRoute')
const substrateRoute = require('./routes/substrateRoute')
// calling 
app.use(cors());
app.use(bodyParser.json());

app.use('/fertilzer', fertilzerRoute)
app.use('/substrate', substrateRoute)




app.get('/', (req, res) => {
    res.send('welcome!')
  })

  app.listen(PORT, () => {
    connect()
    console.log(`App listening on port http://localhost:${PORT}`)
  })