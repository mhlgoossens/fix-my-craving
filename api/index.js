require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const getPlace = require('./routes/getPlace');

const app = express();
const port = 9000;

// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// routes
app.use('/api/getPlace', getPlace);
// app.get('/', (req, res) => res.send('Hello World!'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
