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

export const getExpenseById = async (expenseId: number, userId: number) => {
  const [rows]: any = await db.execute(
    "SELECt * FROM expenses WHERE id = ? AND user_id = ?",
    [expenseId, userId]
  );
  return rows[0];
};

export const getMonthlySummary = async (
  userId: number,
  year: number,
  month: number
) => {
  const [rows]: any = await db.execute(
    `SELECT category, SUM(amount) AS total
     FROM expenses
     WHERE user_id = ? AND YEAR(date) = ? AND MONTH(date) = ?
     GROUP BY category`,
    [userId, year, month]
  );
  return rows;
};
