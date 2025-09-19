"use client";

import { useEffect, useState } from "react";
import { CardContainer } from "@/components/layout";
import { FIXED_SEQUENCE, MAX_ERRORS, TICK_MS, TOTAL } from "./constants";
import { Stats } from "@/types/types";
import { useGameContext } from "@/context/GameContext";
import { Button } from "@/components/ui";

type Props = {
  onGameOver: (result: Stats) => void;
};

export function GameBoard({ onGameOver }: Props) {
  const { username, stats, setStats } = useGameContext();
  const [index, setIndex] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);

  function handleMatch() {
    if (index < 2 || hasClicked || gameFinished) return;

    if (FIXED_SEQUENCE[index] === FIXED_SEQUENCE[index - 2]) {
      setStats((prev) => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setStats((prev) => ({ ...prev, errors: prev.errors + 1 }));
    }
    setHasClicked(true);
  }

  useEffect(() => {
    if (gameFinished) return;

    if (stats.errors >= MAX_ERRORS || index >= TOTAL - 1) {
      setGameFinished(true);
      onGameOver({ correct: stats.correct, errors: stats.errors });
      return;
    }

    const timer = setTimeout(() => {
      setIndex((idx) => idx + 1);
      setHasClicked(false);
    }, TICK_MS);

    return () => clearTimeout(timer);
  }, [index, stats.errors, gameFinished, stats.correct, onGameOver]);

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
          disabled={hasClicked || index < 2}
        >
          Match
        </Button>

        <p className="text-sm text-gray-700">
          Correct: {stats.correct} · Errors: {stats.errors} · Letter {index + 1}
          /{TOTAL}
        </p>
      </div>
    </CardContainer>
  );
}
