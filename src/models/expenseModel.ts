import db from "../config/db";

export const addExpense = async (
  userId: number,
  title: string,
  amount: number,
  category: string,
  date: string
) => {
  const [result]: any = await db.execute(
    "INSERT INTO expenses (user_id, title, amount, category, date) VALUES (?, ?, ?, ?, ?)",
    [userId, title, amount, category, date]
  );
  return result;
};

export const getExpensesByUser = async (userId: number) => {
  const [rows]: any = await db.execute(
    "SELECT * FROM expenses WHERE user_id = ? ORDER BY date DESC",
    [userId]
  );
  return rows;
};
