"use client";

import { CardContainer } from "@/components";
import { Stats } from "@/types/types";
import { Button } from "../../../../components/ui/button";
import { useEffect, useState } from "react";

const FIXED_SEQUENCE: string[] = [
  "A",
  "B",
  "A",
  "C",
  "B",
  "C",
  "D",
  "B",
  "D",
  "C",
  "D",
  "E",
  "C",
  "E",
  "C",
];

const TOTAL = FIXED_SEQUENCE.length;
const MAX_ERRORS = 2;
const TICK_MS = 1500;

type Props = {
  username: string;
  onGameOver: (stats: Stats) => void;
};

export function GameBoard({ username, onGameOver }: Props) {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [errors, setErrors] = useState(0);

  function handleMatch() {
    if (index < 2) return;
    if (FIXED_SEQUENCE[index] === FIXED_SEQUENCE[index - 2]) {
      setCorrect((corr) => corr + 1);
    } else {
      setErrors((err) => err + 1);
    }
  }

  useEffect(() => {
    if (errors >= MAX_ERRORS || index >= TOTAL - 1) {
      onGameOver({ correct, errors });
      return;
    }

    const timer = setTimeout(() => setIndex((idx) => idx + 1), TICK_MS);
    return () => clearTimeout(timer);
  }, [index, errors, onGameOver, correct]);

  return (
    <CardContainer>
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-xl">
          Good luck, <b>{username}</b>!
        </h2>

        <div className="text-6xl font-black h-20 flex items-center">
          {FIXED_SEQUENCE[index]}
        </div>

        <Button
          onClick={handleMatch}
          size="lg"
          variant="outline"
          aria-label="Match letters"
        >
          Match
        </Button>

        <p className="text-sm text-gray-700">
          Correct: {correct} · Errors: {errors} · Letter {index + 1}/{TOTAL}
        </p>
      </div>
    </CardContainer>
  );
}
