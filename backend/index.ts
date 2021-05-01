import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from "cors";
import logger from './config/winston';
import morganMiddleware from './config/morgan';
import music from './src/routes/music';

const app = express();

const PORT = 8000;

app.use(morganMiddleware);
app.use(express.json());
app.use(cors());

app.use("/api", music);

app.listen(PORT, () => {
  logger.info(`Server is running at http://localhost:${PORT}`);
});
