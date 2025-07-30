import express from "express";
import {
  createExpense,
  getMonthlyExpenseSummary,
  getUserExpenses,
} from "../controllers/expenseController";
import authenticateToken from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", authenticateToken, createExpense);
router.get("/", authenticateToken, getUserExpenses);
router.get("/summary", authenticateToken, getMonthlyExpenseSummary);

export default router;
