import { Schema, model } from 'mongoose';

const transactionSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

const Transaction = model('Transaction', transactionSchema);

// 取引一覧を取得
export const getTransactions = async () => {
  return await Transaction.find();
};

// 取引を追加
export const addTransaction = async (data: any) => {
  const transaction = new Transaction(data);
  return await transaction.save();
};

export default Transaction;