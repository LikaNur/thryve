"use client";

import { useState } from "react";
import { GameBoard, ResultBoard, WelcomePage } from "./features";
import { GameSteps } from "../types/types";
import { useGame } from "@/context/GameContext";

export default function HomePage() {
  const { setUsername, setStats } = useGame();
  const [step, setStep] = useState<GameSteps>("welcome");

  switch (step) {
    case "welcome":
      return (
        <WelcomePage
          onStart={(name) => {
            setUsername(name);
            setStep("game");
          }}
        />
      );
    case "game":
      return (
        <GameBoard
          onGameOver={(stats) => {
            setStats(stats);
            setStep("result");
          }}
        />
      );

    case "result":
      return (
        <div>
          <ResultBoard
            onRestart={() => {
              setStats({correct: 0, errors: 0})
              setStep("game");
            }}
          />
        </div>
      );
    default:
      return null;
  }
}
