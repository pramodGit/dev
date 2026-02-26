import db from "../config/db.js";

export const createUser = async (user) => {
  const [result] = await db.query(
    `INSERT INTO users (name, email, phone) VALUES (?, ?, ?)`,
    [user.name, user.email, user.phone]
  );
  return result;
};

export const getAllUsers = async () => {
  const [rows] = await db.query("SELECT * FROM users");
  return rows;
};