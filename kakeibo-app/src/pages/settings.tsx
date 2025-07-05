import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";

const Settings: React.FC = () => {
  const [monthlyBudget, setMonthlyBudget] = useState(2000);
  const [categories, setCategories] = useState<string[]>(["Groceries", "Utilities", "Entertainment"]);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  return (
    <div className="flex flex-col items-start p-10 bg-white">
      <h1 className="text-2xl font-bold mb-5">Settings</h1>

      <Card className="mb-5">
        <CardContent>
          <h2 className="text-lg font-semibold mb-3">Monthly Budget</h2>
          <Input
            type="number"
            value={monthlyBudget}
            onChange={(e) => setMonthlyBudget(Number(e.target.value))}
            className="mb-3"
          />
          <p className="text-sm text-gray-600">Set your monthly budget for expenses.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <div className="flex flex-col mb-3">
            {categories.map((category, index) => (
              <p key={index} className="text-sm text-gray-800">{category}</p>
            ))}
          </div>
          <Input
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="Add new category"
            className="mb-3"
          />
          <Button onClick={handleAddCategory} className="bg-blue-500 text-white">
            Add Category
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;