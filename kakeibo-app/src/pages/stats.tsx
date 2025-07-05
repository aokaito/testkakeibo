import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";

const statsData = {
  totalSpent: 1200,
  budget: 2000,
  categories: [
    { name: "Groceries", amount: 500 },
    { name: "Utilities", amount: 300 },
    { name: "Entertainment", amount: 200 },
    { name: "Others", amount: 200 },
  ],
};

const Stats: React.FC = () => {
  const remainingBudget = statsData.budget - statsData.totalSpent;
  const spendingPercentage = (statsData.totalSpent / statsData.budget) * 100;

  return (
    <div className="flex flex-col items-start p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">月次サマリ</h1>
      <Card className="mb-4">
        <CardContent>
          <h2 className="text-lg font-semibold">総支出</h2>
          <p className="text-xl font-bold">${statsData.totalSpent}</p>
          <Progress
            className="h-2 mt-2 bg-[#dbe0e5]"
            value={spendingPercentage}
            indicatorClassName="bg-[#111416]"
          />
          <p className="text-sm text-gray-600">残り予算: ${remainingBudget}</p>
        </CardContent>
      </Card>

      <h2 className="text-lg font-semibold mb-2">カテゴリ別支出</h2>
      {statsData.categories.map((category, index) => (
        <Card key={index} className="mb-2">
          <CardContent className="flex justify-between">
            <span>{category.name}</span>
            <span>${category.amount}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Stats;