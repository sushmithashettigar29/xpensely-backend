import { Request, Response } from "express";
import { addExpense, getExpensesByUser } from "../models/expenseModel";

interface AuthRequest extends Request {
  user?: any;
}

export const createExpense = async (req: AuthRequest, res: Response) => {
  const { title, amount, category, date } = req.body;
  const userId = req.user.id;

  try {
    const result = await addExpense(userId, title, amount, category, date);
    res.status(201).json({ message: "Expense added successfully", id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error adding expense", error });
  }
};

export const getUserExpenses = async (req: AuthRequest, res: Response) => {
  const userId = req.user.id;

  try {
    const expenses = await getExpensesByUser(userId);
    res.json({ expenses });
  } catch (error) {
    res.status(500).json({ message: "Error fetching expenses", error });
  }
};
