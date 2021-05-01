import mysql, {
  FieldPacket,
  OkPacket,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";
import logger from "../../config/winston";
import { SingleQuery } from "./types";

const URI: string = process.env.DB_URI!;

if (!URI) {
  logger.error("Environment variable DB_URI not set!");
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
  const queryResults: Array<
    [
      (
        | RowDataPacket[]
        | RowDataPacket[][]
        | OkPacket
        | OkPacket[]
        | ResultSetHeader
      ),
      FieldPacket[]
    ]
  > = [];

  try {
    await conn.beginTransaction();

    for (const singleQuery of queries) {
      const result = await conn.query(singleQuery.query, singleQuery.values);
      queryResults.push(result);
    }

    await conn.commit();

    return queryResults;
  } catch (err) {
    await conn.rollback();
    return Promise.reject(err);
  } finally {
    conn.release();
  }
};
