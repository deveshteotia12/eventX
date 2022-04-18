import express from 'express';
import { handelRoute } from './api';
import config from './config';
import { errorHandler } from './shared/middlewares/errorHandling';

const startServer = () => {
  const app = express();
  app.use(express.json());
  app.use(errorHandler);
  app.use('/', handelRoute());

  app.listen(config.port, () => {
    console.log(`Listening on ${config.port}`);
  });
};

startServer();
