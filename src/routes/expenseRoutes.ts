import express from "express";
import {
  createExpense,
  getMonthlyExpenseSummary,
  getUserExpenses,
  getSingleExpense,
} from "../controllers/expenseController";
import authenticateToken from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", authenticateToken, createExpense);
router.get("/", authenticateToken, getUserExpenses);
router.get("/summary", authenticateToken, getMonthlyExpenseSummary);
router.get("/:id", authenticateToken, getSingleExpense);

export default router;
