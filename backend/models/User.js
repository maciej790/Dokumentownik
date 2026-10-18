import databaseHandler from "../database/database.js";

const findByEmail = async (email) => {
  const query = "SELECT * FROM users WHERE email = ?";
  const [results] = await databaseHandler.execute(query, [email]);

  console.log("Database query results:", results);

  return results[0] ?? null;
};

const findByUsername = async (username) => {
  const query = "SELECT * FROM users WHERE username = ?";
  const [results] = await databaseHandler.execute(query, [username]);

  return results[0] ?? null;
};

export default {
  findByEmail,
  findByUsername,
};