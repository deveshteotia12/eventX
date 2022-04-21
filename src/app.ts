import express from 'express';
import { handelRoute } from './api';
import config from './config';
import { errorHandler } from './shared/middlewares/errorHandling';
import cors from 'cors';

const startServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/api', handelRoute());
  app.use(errorHandler);
  app.listen(config.port, () => {
    console.log(`Listening on ${config.port}`);
  });
};

startServer();
