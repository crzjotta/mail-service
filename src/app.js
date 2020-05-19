require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const logger = require('./helper/logger');

const app = express();

app.use(cors());
app.use(routes);
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.listen(3000, () => logger.info('mail-service ok'));
