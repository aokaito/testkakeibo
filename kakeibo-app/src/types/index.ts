// filepath: /kakeibo-app/kakeibo-app/src/types/index.ts
export interface Transaction {
  id: string;
  date: string;
  amount: number;
  category: string;
  note?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Budget {
  id: string;
  month: string;
  totalAmount: number;
  spentAmount: number;
  remainingAmount: number;
}