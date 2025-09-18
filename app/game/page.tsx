"use client";

import { useGameContext } from "@/context/GameContext";
import { GameBoard } from "@/feature/game/GameBoard";
import { useRouter } from "next/navigation";

export default function GamePage() {
  const { setStats } = useGameContext();
  const router = useRouter();

  return (
    <GameBoard
      onGameOver={(stats) => {
        setStats(stats);
        router.push("/result");
      }}
    />
  );
}
