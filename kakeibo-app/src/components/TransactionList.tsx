import React from "react";

type Transaction = { date: string; amount: string; category: string; memo?: string };
type Props = { transactions: Transaction[] };

const TransactionList: React.FC<Props> = ({ transactions }) => (
  <div className="flex flex-col items-start relative self-stretch w-full">
    <h2 className="relative self-stretch mt-5 font-bold text-lg text-[#111416]">
      Last Transactions
    </h2>
    <ul>
      {transactions.map((t, i) => (
        <li key={i} className="flex flex-col items-start p-4 mb-2 w-full border-none shadow-none">
          <div className="p-0 w-full">
            <div className="flex justify-between items-start w-full">
              <div className="flex flex-col">
                <p className="text-sm text-[#637287]">{t.date}</p>
                <p className="font-bold text-base text-[#111416]">{t.amount}</p>
                <p className="text-sm text-[#637287]">{t.category}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default TransactionList;