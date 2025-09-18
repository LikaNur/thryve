"use client";

import { CardContainer } from "@/components";
import { Stats } from "@/types/types";
import { Button } from "../../../../components/ui/button";

type Props = {
  username: string;
  stats: Stats;
  onRestart: () => void;
};

export function ResultBoard({ username, stats, onRestart }: Props) {
  return (
    <CardContainer>
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold">Game Results</h2>

        <p className="text-lg">
          {stats.correct >= 3 ? "Nice work," : "Nice try,"} <b>{username}</b>!
        </p>

        <div className="text-center space-y-1">
          <p>
            ✅ <span className="font-semibold">Correct:</span> {stats.correct}
          </p>
          <p>
            ❌ <span className="font-semibold">Errors:</span> {stats.errors}
          </p>
        </div>

        <Button
          onClick={onRestart}
          size="lg"
          variant="outline"
          aria-label="Play again"
        >
          Play Again
        </Button>
      </div>
    </CardContainer>
  );
}
