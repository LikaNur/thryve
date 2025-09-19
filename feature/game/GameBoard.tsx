"use client";

import { useEffect, useState } from "react";
import { CardContainer } from "@/components/layout";
import { FIXED_SEQUENCE, MAX_ERRORS, TICK_MS, TOTAL } from "./constants";
import { Stats } from "@/types/types";
import { useGameContext } from "@/context/GameContext";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

type Props = {
  onGameOver: (result: Stats) => void;
};

export function GameBoard({ onGameOver }: Props) {
  const { username, stats, setStats } = useGameContext();
  const [index, setIndex] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const router = useRouter();

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

      localStorage.setItem(
        `result:${username}`,
        JSON.stringify({ correct: stats.correct, errors: stats.errors })
      );
      router.push(`/result/${encodeURIComponent(username)}`);
      return;
    }

    const timer = setTimeout(() => {
      setIndex((idx) => idx + 1);
      setHasClicked(false);
    }, TICK_MS);

    return () => clearTimeout(timer);
  }, [
    index,
    stats.errors,
    gameFinished,
    stats.correct,
    onGameOver,
    username,
    router,
  ]);

  return (
    <CardContainer>
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-xl">
          Good luck, <b>{username}</b>!
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="text-6xl font-black h-20 flex items-center"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            {FIXED_SEQUENCE[index]}
          </motion.div>
        </AnimatePresence>

        <Button
          onClick={handleMatch}
          size="lg"
          variant="outline"
          aria-label="Match letters"
          disabled={hasClicked || index < 2}
          className="dark:border-white dark:hover:bg-[#a284e8] dark:bg-[#8A69D5]"
        >
          Match
        </Button>

        <p className="text-sm text-gray-700 dark:text-white">
          Correct: {stats.correct} · Errors: {stats.errors} · Letter {index + 1}
          /{TOTAL}
        </p>
      </div>
    </CardContainer>
  );
}
