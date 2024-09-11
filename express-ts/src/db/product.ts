// import { QueryError, PoolConnection } from "mysql2";
// import { connection } from "../config/db";
// import { Product } from "../model/product";
import { RowDataPacket } from "mysql2"; // Import type for rows returned from queries
import { promisePool } from "../config/db";
//import { Request, Response } from "express"; // Import Request and Response from express

const selectAll = async () => {
  try {
    const [rows]: [RowDataPacket[], any] = await promisePool.query(
      "SELECT * FROM product"
    );
    return rows;
  } catch (err) {
    console.error("Database query error:", err);
  }
};

export default { selectAll };