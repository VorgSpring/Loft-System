import express from 'express';
import logger from './logger/';

const app = express();

app.use('/', express.static('static'));

const HOSTNAME = '127.0.0.1';
const PORT = 3000;
const SERVER_INFO_MESSAGE = `Server running at http://${HOSTNAME}:${PORT}/`;

app.listen(PORT, HOSTNAME, () => {
  logger.info(SERVER_INFO_MESSAGE);
});
