import express from 'express';
import { getTransactions, addTransaction } from '../models/transaction';

const router = express.Router();

// Get all transactions
router.get('/', async (req, res) => {
  try {
    const transactions = await getTransactions();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving transactions' });
  }
});

// Add a new transaction
router.post('/', async (req, res) => {
  const { date, amount, category } = req.body;

  if (!date || !amount || !category) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newTransaction = await addTransaction({ date, amount, category });
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ message: 'Error adding transaction' });
  }
});

export default router;