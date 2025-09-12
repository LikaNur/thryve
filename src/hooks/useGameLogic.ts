import { Stats } from "@/types/types";
import { useCallback, useEffect, useState } from "react";

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

export function useGameLogic(onGameOver: (stats: Stats) => void) {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [errors, setErrors] = useState(0);

  const handleMatch = useCallback(() => {
    if (index < 2) return;
    if (FIXED_SEQUENCE[index] === FIXED_SEQUENCE[index - 2]) {
      setCorrect((corr) => corr + 1);
    } else {
      setErrors((err) => err + 1);
    }
  }, [index]);

  useEffect(() => {
    if (errors >= MAX_ERRORS || index >= TOTAL - 1) {
      onGameOver({ correct, errors });
      return;
    }

    const timer = setTimeout(() => setIndex((idx) => idx + 1), TICK_MS);
    return () => clearTimeout(timer);
  }, [index, errors, onGameOver, correct]);

  return {
    letter: FIXED_SEQUENCE[index],
    index,
    total: TOTAL,
    correct,
    errors,
    handleMatch,
  };
}
