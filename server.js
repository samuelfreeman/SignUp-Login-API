const express = require('express');

const app = express();

const config = require('config');

require('dotenv').config();

const bodyParser = require('body-parser');

const helmet = require('helmet');

const compression = require('compression');

const cors = require('cors');

require('dotenv').config();

const apiRoute = require('./route/index');

// const port = config.get('port');

app.use(compression());

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors({ credentials: true, origin: true }));

app.use(apiRoute);

app.use(async (req, res, next) => {
  next(
    res.status(200).json({
      message: 'Route not found!',
    }),
  );
});

app.listen(3000);
