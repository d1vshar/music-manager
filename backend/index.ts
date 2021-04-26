import dotenv from 'dotenv';

import express from 'express';
import bodyParser from 'body-parser';
import logger from './config/winston';
import morganMiddleware from './config/morgan';
import music from './src/routes/music';

dotenv.config();

const app = express();

const PORT = 8000;

app.use(morganMiddleware);
app.use(bodyParser.json());

app.use(music);

app.listen(PORT, () => {
  logger.info(`Server is running at http://localhost:${PORT}`);
});
