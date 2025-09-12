"use client";

import { CardContainer } from "@/components";
import { Stats } from "@/types/types";
import { useGameLogic } from "@/hooks";
import { Button } from "../../../../components/ui/button";

type GameBoardProps = {
  username: string;
  onGameOver: (stats: Stats) => void;
};

export function GameBoard({ username, onGameOver }: GameBoardProps) {
  const { letter, index, total, correct, errors, handleMatch } =
    useGameLogic(onGameOver);

  return (
    <CardContainer>
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-xl">
          Good luck, <b>{username}</b>!
        </h2>

        <div className="text-6xl font-black h-20 flex items-center">{letter}</div>

        <Button
          onClick={handleMatch}
          size="lg"
          variant="outline"
          aria-label="Match letters"
        >
          Match
        </Button>

        <p className="text-sm text-gray-700">
          Correct: {correct} · Errors: {errors} · Letter {index + 1}/{total}
        </p>
      </div>
    </CardContainer>
  );
}
