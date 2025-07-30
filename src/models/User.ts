import db from "../config/db";

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
}

// Register
const createUser = async (user: User): Promise<any> => {
  const { name, email, password } = user;
  const [result] = await db.execute(
    "INSERT INTO users (name,email,password) VALUES (?, ?, ?)",
    [name, email, password]
  );
  return result;
};

// Login
const findUserByEmail = async (email: string): Promise<any> => {
  const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  const user = (rows as any[])[0];
  return user;
};

export default {
  createUser,
  findUserByEmail,
};
