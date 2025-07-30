import express from "express";
import {
  createExpense,
  getUserExpenses,
} from "../controllers/expenseController";
import authenticateToken from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/", authenticateToken, createExpense);
router.get("/", authenticateToken, getUserExpenses);

export default router;
