"use client";

import Image from "next/image";
import { useState } from "react";
import { Instructions } from "./Instructions";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";


type WelcomePageProps = {
  onStart: (name: string) => void;
};

export function WelcomePage({ onStart }: WelcomePageProps) {
  const [name, setName] = useState("");
  const isInvalid = name.trim().length > 0 && name.trim().length < 4;

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 pt-40 gap-6">
      <header className="text-center">
        <h1 className="text-3xl font-black tracking-wide">WELCOME</h1>
        <div className="flex items-center justify-center gap-2 mt-2">
          <p className="text-lg">to the 2-back game by</p>
          <Image
            src="/logo.png"
            alt="Thryve Logo"
            width={120}
            height={30}
            priority
          />
        </div>
      </header>

      <Instructions />

      <div className="flex flex-col gap-2 w-full max-w-md">
        <label htmlFor="username" className="text-sm">
          Please enter your name
        </label>
        <Input
          id="username"
          type="text"
          required
          minLength={4}
          placeholder="Enter your name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {isInvalid && (
          <p className="text-xs text-red-600">
            Name must be at least 4 characters
          </p>
        )}
      </div>

      <Button
        onClick={() => onStart(name.trim())}
        size="lg"
        variant="warning"
        disabled={name.trim().length < 4}
        aria-label="Start game"
      >
        Start
      </Button>
    </div>
  );
}
