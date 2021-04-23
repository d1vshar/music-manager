import express from "express";
import logger from "./config/winston";
import morganMiddleware from "./config/morgan";

const app = express();

const PORT = 8000;

app.use(morganMiddleware);
app.listen(PORT, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
