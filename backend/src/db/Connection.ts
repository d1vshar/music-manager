import mysql from 'mysql2/promise';
import logger from '../../config/winston';

const URI: string = process.env.DB_URI!;

if (!URI) {
  logger.error('Environment variable DB_URI not set!');
  process.exit(0);
}

const connection = mysql.createConnection(URI);

export default connection;
