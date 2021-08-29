/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import logger from './config/winston';
import morganMiddleware from './config/morgan';
import music from './src/controllers/music';
import artist from './src/controllers/artist';
import genre from './src/controllers/genre';
import playlist from './src/controllers/playlist';

const app = express();

const PORT = 8000;

app.use(morganMiddleware);
app.use(express.json());
app.use(cors());

app.use('/api/music', music);
app.use('/api/artist', artist);
app.use('/api/genre', genre);
app.use('/api/playlist', playlist);

app.listen(PORT, () => {
  logger.info(`Server is running at http://localhost:${PORT}`);
});
