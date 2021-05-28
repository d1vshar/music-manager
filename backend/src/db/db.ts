import mysql, {
  FieldPacket,
  OkPacket,
  ResultSetHeader,
  RowDataPacket,
} from 'mysql2/promise';
import logger from '../../config/winston';
import { SingleQuery } from './models';

const URI: string = process.env.DB_URI!;

if (!URI) {
  logger.error(`Environment variable DB_URI not set: ${URI}`);
  process.exit(0);
}

const pool = mysql.createPool({
  uri: URI,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

export default pool;

export const execute = async (queries: SingleQuery[]) => {
  const conn = await pool.getConnection();
  const promisedQueries: Array<
  Promise<[
    RowDataPacket[] |
    RowDataPacket[][] |
    OkPacket |
    OkPacket[] |
    ResultSetHeader,
    FieldPacket[]]>
  > = [];

  try {
    await conn.beginTransaction();

    queries.forEach((singleQuery) => {
      const result = conn.query(singleQuery.query, singleQuery.values);
      promisedQueries.push(result);
    });

    const result = await Promise.all(promisedQueries);

    await conn.commit();

    return result;
  } catch (err) {
    await conn.rollback();
    return await Promise.reject(err);
  } finally {
    conn.release();
  }
};
