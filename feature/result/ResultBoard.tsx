"use client";

import { CardContainer } from "@/components/layout";
import { Button } from "@/components/ui";
import { useGameContext } from "@/context/GameContext";
import { useRouter } from "next/navigation";

export function ResultBoard() {
  const { username, stats, setStats } = useGameContext();
  const router = useRouter();

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
          onClick={() => {
            router.push("/game");
            setStats({ correct: 0, errors: 0 });
          }}
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
