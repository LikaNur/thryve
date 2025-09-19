"use client";

import { useGameContext } from "@/context/GameContext";
import { GameBoard } from "@/feature/game/GameBoard";
import { useRouter } from "next/navigation";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";

export default function GamePage() {
  const { username, setStats } = useGameContext();
  const router = useRouter();

  useEffect(() => {
    if (!username) return router.push("/");
  }, [username, router]);

  if (!username) return null;

  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={1000}
      iconVariant={{
        success: "😍",
        error: "😔",
      }}
    >
      <GameBoard
        onGameOver={(stats) => {
          setStats(stats);
          router.push("/result");
        }}
      />
    </SnackbarProvider>
  );
}
