import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";

type Transaction = { date: string; amount: string; category: string; memo?: string };
type Props = { onSubmit: (transaction: Transaction) => void };

const TransactionForm: React.FC<Props> = ({ onSubmit }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [memo, setMemo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      date: new Date().toLocaleDateString(),
      amount,
      category,
      memo,
    });
    setAmount("");
    setCategory("");
    setMemo("");
  };

  return (
    <Card className="p-4">
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="金額"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="カテゴリ"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <Input
            type="text"
            placeholder="メモ"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
          <Button type="submit" className="bg-blue-500 text-white">
            追加
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default TransactionForm;