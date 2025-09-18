"use client";

import Image from "next/image";
import { Input } from "../../../../components/ui/input";
import { Button } from "../../../../components/ui/button";
import { useGame } from "@/context/GameContext";

type Props = {
  onStart: (name: string) => void;
};

export function WelcomePage({ onStart }: Props) {
  const { username, setUsername } = useGame();
  const isInvalid = username.length > 0 && username.length < 3;

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

      <section
        aria-labelledby="instructions-heading"
        className="max-w-md text-sm text-left space-y-2"
      >
        <h2 id="instructions-heading" className="sr-only">
          Game Instructions
        </h2>
        <p>
          The 2-back game is a fun memory challenge that trains your focus and
          working memory. You’ll see a sequence of letters, one at a time.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            If the current letter matches the one shown <b>2 steps back</b>,
            press the button.
          </li>
          <li>
            The game ends after <b>2 mistakes</b> or{" "}
            <b>when the sequence is complete</b>.
          </li>
          <li>Stay focused and aim for the best score!</li>
        </ul>
      </section>

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
          value={username}
          onChange={(e) => setUsername(e.target.value.trim())}
        />
        {isInvalid && (
          <p className="text-xs text-red-600">
            Name must be at least 4 characters
          </p>
        )}
      </div>

      <Button
        onClick={() => onStart(username)}
        size="lg"
        variant="warning"
        disabled={username.length < 3}
        aria-label="Start game"
      >
        Start
      </Button>
    </div>
  );
}
