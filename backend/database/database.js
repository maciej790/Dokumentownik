
import mysql from "mysql2/promise";

const databaseHandler = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "dokumentownik",
});

try {
  const connection = await databaseHandler.getConnection();
  console.log("Connected to the MySQL database.");
  connection.release();
} catch (err) {
  console.error("Database connection error:", err.message);
}

export default databaseHandler;
