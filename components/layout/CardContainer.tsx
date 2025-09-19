"use client";

import { ReactNode } from "react";

type CardContainerProps = {
  children: ReactNode;
};

export function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="flex items-center justify-center min-h-[85vh] px-4 pt-40 md:pt-20 gap-6">
      <div
        className="
          w-full max-w-md min-h-[22rem] rounded-xl bg-white/10 dark:bg-[#8A69D5] dark:shadow-2xl dark:shadow-[#3b1a43] backdrop-blur-md p-6 md:p-10 shadow-lg"
      >
        {children}
      </div>
    </div>
  );
}
