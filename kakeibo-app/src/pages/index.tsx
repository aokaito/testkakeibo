import { Avatar } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Progress } from "../components/ui/progress";
import React from "react";
import image from "./image.svg";
import vector0 from "./vector-0.svg";
import vector1 from "./vector-1.svg";
import TransactionList from "../components/TransactionList";

const Home: React.FC = () => {
  const transactions = [
    {
      date: "Today",
      amount: "$50",
      category: "Groceries",
    },
    {
      date: "Yesterday",
      amount: "$25",
      category: "Coffee",
    },
    {
      date: "2 days ago",
      amount: "$100",
      category: "Utilities",
    },
  ];

  return (
    <div className="flex flex-col items-start relative bg-white">
      <div className="flex flex-col min-h-[800px] items-start relative self-stretch w-full flex-[0_0_auto] bg-white">
        <header className="items-center justify-between px-10 py-3 flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#e5e8ea] flex relative self-stretch w-full">
          <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative flex-1 w-4 grow">
                <div className="relative w-3 h-3 top-0.5 left-0.5">
                  <img
                    className="absolute w-2.5 h-[9px] top-0.5 left-px"
                    alt="FinTrack logo"
                    src={image}
                  />
                  <img
                    className="absolute w-3 h-3 top-0 left-0"
                    alt="FinTrack logo outline"
                    src={vector1}
                  />
                </div>
              </div>
            </div>
            <h1 className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#111416] text-lg tracking-[0] leading-[23px] whitespace-nowrap">
              FinTrack
            </h1>
          </div>

          <div className="flex items-start justify-end gap-8 relative flex-1 grow">
            <div className="inline-flex max-w-[480px] h-10 items-center justify-center gap-2 px-2.5 py-0 relative flex-[0_0_auto] bg-[#eff2f4] rounded-lg overflow-hidden">
              <div className="flex flex-col items-center relative flex-1 grow">
                <div className="relative flex-1 self-stretch w-full grow">
                  <img
                    className="absolute w-4 h-4 top-0.5 left-0.5"
                    alt="Search icon"
                    src={vector0}
                  />
                  <Input
                    className="bg-transparent border-none pl-6 h-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </div>
            </div>
            <Avatar className="w-10 h-10 rounded-[20px] bg-cover bg-[50%_50%]" />
          </div>
        </header>

        <main className="items-start justify-center px-40 py-5 flex-1 grow flex relative self-stretch w-full">
          <div className="flex flex-col max-w-[960px] items-start relative flex-1 grow">
            <div className="flex flex-wrap items-start justify-around gap-[12px_12px] p-4 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col w-72 items-start relative">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#111416] text-[32px] tracking-[0] leading-10">
                  Overview
                </h2>
              </div>
            </div>

            <Card className="flex flex-col items-start gap-3 p-4 relative self-stretch w-full flex-[0_0_auto] border-none shadow-none">
              <CardContent className="p-0 w-full">
                <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#111416] text-base tracking-[0] leading-6 whitespace-nowrap">
                      Monthly Spending
                    </h3>
                  </div>
                  <div className="inline-flex flex-col h-6 items-start relative flex-[0_0_auto]">
                    <span className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#111416] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                      60%
                    </span>
                  </div>
                </div>

                <Progress
                  className="h-2 mt-3 bg-[#dbe0e5]"
                  value={60}
                  indicatorClassName="bg-[#111416]"
                />

                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mt-3">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#637287] text-sm tracking-[0] leading-[21px]">
                    $1,200 of $2,000
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col items-start pt-5 pb-3 px-4 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#111416] text-[22px] tracking-[0] leading-7">
                Last 30 Transactions
              </h2>
            </div>

            <TransactionList transactions={transactions} />

            <div className="flex items-start justify-end px-4 py-3 relative self-stretch w-full flex-[0_0_auto]">
              <Button className="min-w-[84px] max-w-[480px] h-10 px-4 py-0 bg-[#1977e5] rounded-lg overflow-hidden">
                <span className="[font-family:'Inter-Bold',Helvetica] font-bold text-white text-sm text-center tracking-[0] leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                  Add Transaction
                </span>
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;