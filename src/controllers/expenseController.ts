import { Request, Response } from "express";
import {
  addExpense,
  getExpensesByUser,
  getMonthlySummary,
  getExpenseById,
} from "../models/expenseModel";

interface AuthRequest extends Request {
  user?: any;
}

export const createExpense = async (req: AuthRequest, res: Response) => {
  const { title, amount, category, date } = req.body;
  const userId = req.user.id;

  try {
    const result = await addExpense(userId, title, amount, category, date);
    res
      .status(201)
      .json({ message: "Expense added successfully", id: result.insertId });
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

export const getSingleExpense = async (req: AuthRequest, res: Response) => {
  const expenseId = Number(req.params.id);
  const userId = req.user.id;

  try {
    const expense = await getExpenseById(expenseId, userId);

    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.json({ expense });
  } catch (error) {
    res.status(500).json({ message: "Error fetching expense", error });
  }
};

export const getMonthlyExpenseSummary = async (
  req: AuthRequest,
  res: Response
) => {
  const userId = req.user.id;
  const { year, month } = req.query;

  if (!year || !month) {
    return res.status(400).json({ message: "Year and month are required" });
  }

  try {
    const summary = await getMonthlySummary(
      userId,
      Number(year),
      Number(month)
    );
    res.json({ summary });
  } catch (error) {
    res.status(500).json({ message: "Error fetching summary", error });
  }
};
