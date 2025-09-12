"use client";

import { ReactNode } from "react";

type CardContainerProps = {
  children: ReactNode;
};

export function CardContainer({ children }: CardContainerProps) {
  return (
    <div className="flex items-center justify-center min-h-[85vh] md:pt-18 mx-4">
      <div className="p-6 md:p-12 min-h-[12rem] md:min-h-[18rem] max-w-lg w-full">
        {children}
      </div>
    </div>
  );
}
