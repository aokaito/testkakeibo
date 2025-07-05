import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

type Transaction = { date: string; amount: string; category: string; memo?: string };

const TransactionsPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const fetchTransactions = async () => {
    // 仮データでOK
    setTransactions([
      { date: "Today", amount: "1000", category: "Food" },
      { date: "Yesterday", amount: "500", category: "Book" }
    ]);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleAddTransaction = (newTransaction: Transaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
    setIsFormVisible(false);
  };

  return (
    <div className="flex flex-col items-start p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <Button onClick={() => setIsFormVisible(true)} className="mb-4">
        Add Transaction
      </Button>
      {isFormVisible && (
        <TransactionForm onSubmit={handleAddTransaction} />
      )}
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default TransactionsPage;